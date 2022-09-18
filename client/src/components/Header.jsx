import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import HeaderNav from './HeaderNav.jsx';
import { SERVER } from '../../utils/const.js';
import { fetchMain } from '../../fethes.jsx';
import { useLocation } from 'react-router-dom';

const Header = () => {
    const [burger, setBurger] = useState(false);
    const [mainInfo, setMainInfo] = useState({});
    const route = useLocation(); 
    console.log(route.pathname);
    useEffect(()=>{ 
        fetchMain(setMainInfo);
    }, [])
    return (
        <header className={route.pathname == "/" ? "" : "header__color"}>
            <div className={"header _container"}>
                <div className="header__logo logo">
                    <div className="logo__icon">
                        <img src={`${SERVER}/${mainInfo.logo}`} alt="" />
                    </div>
                    <div className="logo__title">{mainInfo.title}</div>
                </div>
                <ul className="header__nav nav">
                    <HeaderNav/>
                </ul>
                <div onClick={()=>{setBurger(!burger)}} className={burger ? "burger_active" : "burger_container"}>
                    <div className="burger">
                        <div className="burger__lines">
                            <div className="burger__line"></div>
                            <div className="burger__line"></div>
                            <div className="burger__line"></div>
                        </div>
                        <ul className="burger__content">
                            <HeaderNav/>
                        </ul>
                    </div>
                </div>

            </div>
        </header>
    );
};

export default Header;