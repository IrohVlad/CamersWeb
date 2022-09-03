import React, {useState} from 'react';
import HeaderNav from './HeaderNav.jsx';

const Header = () => {
    const [burger, setBurger] = useState(false);
    return (
        <header>
            <div className="header _container">
                <div className="header__logo logo">
                    <div className="logo__icon">
                        {/* <img src="" alt="" /> */}
                    </div>
                    <div className="logo__title">Название</div>
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