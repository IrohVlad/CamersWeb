import React from 'react';
import { Link } from 'react-router-dom';


const HeaderNav = () => {
    return (
        <>
            <li className='nav__item'><Link className='_btn' to="">ГЛАВНАЯ</Link></li> 
            <li className='nav__item'><Link className='_btn' to="/blog">БЛОГ</Link></li> 
            <li className='nav__item'><Link className='_btn' to="/price">ПРАЙСЛИСТ</Link></li> 
            <li className='nav__item'><Link className='_btn' to="/contacts">КОНТАКТЫ</Link></li> 
        </>
    );
};

export default HeaderNav;