import React, {useEffect, useState} from 'react';
import { SERVER } from '../utils/const.js';
import { fetchMain } from '../fethes.jsx';

const MainPage = () => {
    const [mainInfo, setMainInfo] = useState({});

    useEffect(()=>{
        fetchMain(setMainInfo);
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
                    <div className="card">
                        <div className="card__icon">
                            <img src="" alt="" />
                        </div>
                        <div className="card__text">
                            edfsef sefsefsefd dddddd dddddddd dddddddd ddddddddddddd
                        </div>
                    </div>
                    <div className="card">
                        <div className="card__icon">
                            <img src="" alt="" />
                        </div>
                        <div className="card__text">
                            edfsefsefs efsefdhhhh hhhhhhhhhhhhh
                        </div>
                    </div>
                    <div className="card">
                        <div className="card__icon">
                            <img src="" alt="" />
                        </div>
                        <div className="card__text">
                            edfsefs efsefsefdgrdrg ggggggggggg ggggggggggggggg gggggggggg gggggggggg
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default MainPage;