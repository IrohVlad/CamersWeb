import React, {useEffect, useState} from 'react';
import WhyUsCard from '../src/components/WhyUsCard.jsx';
import { SERVER } from '../utils/const.js';
import { fetchMain, fetchCards } from '../fethes.jsx';

const MainPage = () => {
    // const cardsInfo = [{
    // icon: "ideaIcon.png",
    // text: "Скорость",}];
    const [mainInfo, setMainInfo] = useState({});
    const [cardsInfo, setCardsInfo] = useState([]);
    useEffect(()=>{
        fetchMain(setMainInfo);
        fetchCards(setCardsInfo);
    }, [])
    return (
        <main>
            <section className='section-1'>
                <img src={`${SERVER}/${mainInfo.img}`} alt="" />
                <div className="section-1__text">{mainInfo.disc}</div>
            </section>
            <section className='section-2 _container'>
                <div className="section-2__title">Почему мы?</div>
                <div className="section-2__text">{mainInfo.whyUsText}</div>
                <div className="section-2__content">
                    {cardsInfo.map((item)=> <WhyUsCard info={item} />)}
                </div>
            </section>
            <section className='section-3 _container'>
                <div className="main__blog-item"></div>
                <div className="main__blog-item"></div>
                <div className="main__blog-item"></div>
                <div className="main__blog-item"></div>
            </section>
        </main>
    );
};

export default MainPage;