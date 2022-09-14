import React from 'react';
import { SERVER } from '../../utils/const';

const Blog = ({info}) => {
    return (
        <div className="blog-post">
                <div className="post__img">
                    <img src={`${SERVER}/${info.img}`} alt="" />
                </div>
                <div className="post__text">
                    {info.text}
                </div>
                <div className="post__date">{info.createdAt}</div>
        </div>
    );
};

export default Blog;