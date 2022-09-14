import React, {useState, useEffect} from 'react';
import {SERVER} from '../utils/const.js'
import Blog from '../src/components/Blog.jsx';
import {fetchPosts} from '../fethes.jsx'

const BlogPage = () => {
    const [Posts, setPosts] = useState([]);
    

    useEffect(()=>{
        fetchPosts(setPosts);
        
    }, [])
    return (
        <main>
            <section className='blog-section _container'>
            {Posts.map((item)=> <Blog info={item} />)}
            </section>
        </main>
    );
};

export default BlogPage;