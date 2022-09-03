import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="header _container">
            <div className="header__logo logo">
                <div className="logo__icon"></div>
                <div className="logo__title">Название</div>
            </div>
            <ul className="header__nav nav">
                <li className="nav__item">ГЛАВНАЯ</li>
                <li className="nav__item">БЛОГ</li>
                <li className="nav__item">ПРАЙСЛИСТ</li>
                <li className="nav__item">КОНТАКТЫ</li>
            </ul>
            </div>
        </header>
    );
};

export default Header;