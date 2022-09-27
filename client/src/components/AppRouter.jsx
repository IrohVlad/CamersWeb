import React, { createContext, useEffect, useState } from 'react';
import {Route, Routes} from 'react-router-dom'
import {SimpleRout, AuthRout} from '../../routes.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

export const auth = createContext();

const AppRouter = () => {

    const [authStatus, setAuthStatus] = useState(true);

    useEffect(()=>{
      async function checkFunk(func) {
        await fetch(`http://localhost:7000/api/auth/check`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${localStorage.getItem('token')}`
            },
          }).then(response => {
            if(response.ok){
              console.log('токен подтвержден', authStatus);
            }
            else{
              func(false);
              console.log('ошибка токена', authStatus);
            }
          });
      }
      checkFunk(setAuthStatus);
    },[])
    
    return (
    <auth.Provider value={{authStatus, setAuthStatus}}>
      <Header/>
      <Routes>
        {authStatus ?  AuthRout.map(({path, Component})=><Route key={path} path={path} element={Component} exact/>) : SimpleRout.map(({path, Component})=><Route key={path} path={path} element={Component} exact/>)}
      </Routes>
      <Footer/>
    </auth.Provider>
    );
};

export default AppRouter;