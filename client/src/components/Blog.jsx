import React from 'react';
import { SERVER } from '../../utils/const';
import { Link } from 'react-router-dom';

const Blog = ({info}) => {
    const date = info.updatedAt.slice(0, 10);
    return (
        <Link to={`/post?id=${info.id}`} className="blog-post">
            
                <div className="post__img">
                    <img src={`${SERVER}/${info.img}`} alt="" />
                </div>
                <div className="post__text">
                    {info.title}
                </div>
                <div className="post__date">{date}</div>    
            
        </Link>
    );
};

export default Blog;