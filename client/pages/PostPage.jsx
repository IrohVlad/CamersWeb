import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { fetchOnePost } from '../fethes.jsx';
import { SERVER } from '../utils/const.js';

const PostPage = () => {
    const id = new URLSearchParams(useLocation().search).get("id");
    const [post, getPost] = useState([]);
    useEffect(()=>{
        fetchOnePost(getPost, id);
    }, [])
    return (
        <main>
        {post.map((item)=>{
            return<div className='post-section _container'>
                <div className="title">{item.title}</div>
                <div className="img">
                    <img src={`${SERVER}/${item.img}`} alt="" />
                </div>
                <div className="text">{item.text.split('\n').map((i)=> {
                    return <p>{i}<br/></p>
                })}</div>
            </div>
        })}
        </main>
    );
};

export default PostPage;