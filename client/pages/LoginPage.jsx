import React, {useState, useContext, useEffect} from 'react';
import { fetchLogin } from '../fethes.jsx';
import { auth } from '../src/components/AppRouter.jsx';

const LoginPage = () => {

    const [{login, password}, setInfo] = useState({login:"", password:""})
    const [dataSend, setDataSend] = useState(true);

    const {authStatus, setAuthStatus} = useContext(auth);

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
                func(true);
                console.log('токен подтвержден', authStatus);
              }
              else{
                func(false);
                console.log('ошибка токена', authStatus);
              }
            });
        }
        checkFunk(setAuthStatus);
      },[dataSend])

    return (
        <main>
            <section className='login'>
                <form >
                    <div className="password-input">
                        <input onChange={(e)=>{setInfo({login:e.target.value, password:password})}} type="text" name='login' required="required" />  
                        <span>Логин</span>
                    </div>
                    <div className="password-input">
                        <input typeof='password' onChange={(e)=>{setInfo({login:login, password:e.target.value})}} type="text" name='password' required="required" />  
                        <span>Пароль</span>
                    </div>
                    <button type="submit" onClick={async (e)=>{
                        e.preventDefault();
                        await fetchLogin({login, password});
                        setDataSend(!dataSend);
                        }}>
                        Войти
                    </button>
                </form>
            </section>
        </main>
    );
};

export default LoginPage;