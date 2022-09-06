import React from 'react';

const LoginPage = () => {
    return (
        <main>
            <section className='login'>
                <form action="">
                    <div className="password-input">
                        <input type="text" name='password' required="required" />  
                        <span>Пароль</span>
                    </div>
                    <button>
                        Обновить
                    </button>
                </form>
            </section>
        </main>
    );
};

export default LoginPage;