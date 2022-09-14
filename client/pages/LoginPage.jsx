import React, {useState} from 'react';
import { fetchLogin } from '../fethes.jsx';

const LoginPage = () => {

    const [{login, password}, setInfo] = useState({login:"", password:""})

    return (
        <main>
            <section className='login'>
                <form >
                    <div className="password-input">
                        <input onChange={(e)=>{setInfo({login:e.target.value, password:password})}} type="text" name='login' required="required" />  
                        <span>Логин</span>
                    </div>
                    <div className="password-input">
                        <input onChange={(e)=>{setInfo({login:login, password:e.target.value})}} type="text" name='password' required="required" />  
                        <span>Пароль</span>
                    </div>
                    <button type="submit" onClick={(e)=>{
                        e.preventDefault();
                        fetchLogin({login, password});
                        }}>
                        Войти
                    </button>
                </form>
            </section>
        </main>
    );
};

export default LoginPage;