import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { auth } from './AppRouter.jsx';

const SimpleLinks = [
    {
        text: "БЛОГ",
        to: "/blog"
    },
    {
        text: "ПРАЙСЛИСТ",
        to: "/price"
    }
]
const AuthLinks = [
    {
        text: "БЛОГ",
        to: "/blog"
    },
    {
        text: "ПРАЙСЛИСТ",
        to: "/price"
    },
    {
        text: "АДМИН",
        to: "/admin"
    }
]

const HeaderNav = () => {

    const {authStatus} = useContext(auth);

    return (
        <>{authStatus ? 
            AuthLinks.map(item => <li className='nav__item'><Link className='_btn' to={item.to}>{item.text}</Link></li>)
            :
            SimpleLinks.map(item => <li className='nav__item'><Link className='_btn' to={item.to}>{item.text}</Link></li>)
        
        }</>
        
    );
};

export default HeaderNav;