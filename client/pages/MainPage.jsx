import React, {useEffect, useState} from 'react';
import WhyUsCard from '../src/components/WhyUsCard.jsx';
import { SERVER } from '../utils/const.js';
import { fetchMain, fetchCards, fetchMainPosts} from '../fethes.jsx';
import Post from '../src/components/Post.jsx';

const MainPage = () => {
    // const cardsInfo = [{
    // icon: "ideaIcon.png",
    // text: "Скорость",}];
    const [mainInfo, setMainInfo] = useState({});
    const [cardsInfo, setCardsInfo] = useState([]);
    const [mainPosts, setMainPosts] = useState([]);
    useEffect(()=>{
        fetchMain(setMainInfo);
        fetchCards(setCardsInfo);
        fetchMainPosts(setMainPosts);
    }, [])
    console.log(mainPosts);
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
                {mainPosts.map((item)=> <Post info={item}/>)}
            </section>
        </main>
    );
};

export default MainPage;