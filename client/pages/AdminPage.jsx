import React, {useEffect, useState} from 'react';
import { SERVER } from '../utils/const.js';
import { fetchMain, fetchPosts, fetchMainPut } from '../fethes.jsx';
import Post from '../src/components/Post.jsx';

const AdminPage = () => {
    const [{img, logo, title, disc, whyUsText}, setMainInfo] = useState({});
    const [Posts, setPosts] = useState([]);
    

    useEffect(()=>{
        fetchMain(setMainInfo);
        fetchPosts(setPosts);
        
    }, [])
    return (
        <main>
            <section className="admin">
                <div className="main-content">
                    <div className="title-input">
                        <input onChange={(e)=>{
                            const title = e.target.value;
                            setMainInfo(
                                {img, logo, title , disc, whyUsText})
                            }} type="text" name='title' value={title} required="required" />
                        <span>Название компании</span>
                    </div>
                    <div className="disc-input">
                        <textarea onChange={(e)=>{
                            const disc = e.target.value;
                            setMainInfo(
                                {img, logo, title , disc, whyUsText})
                            }} name="disc" value={disc} required="required" />
                        <span>Описание</span>
                    </div>
                    <div className="why-input">
                        <textarea onChange={(e)=>{
                            const whyUsText = e.target.value;
                            setMainInfo(
                                {img, logo, title , disc, whyUsText})
                            }} name="whyUsText" value={whyUsText} required="required"  />
                        <span>"Почему мы" текст</span>
                    </div>
                    <button onClick={()=>{
                        fetchMainPut({img, logo, title, disc, whyUsText});
                        }}>Обновить
                    </button>
                </div>
                <ul className="posts__container _container">
                    {Posts.map((item) => <Post info={item}/>)}  
                </ul>
            </section>
        </main>
    );
};

export default AdminPage;