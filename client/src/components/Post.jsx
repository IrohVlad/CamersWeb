import React from 'react';
import { SERVER } from '../../utils/const';
import {Link} from 'react-router-dom';

export default function Post({info}) {
  return (
    <Link to={`/post?id=${info.id}`} className="main__blog-item">
      <div className="img">
        <img src={`${SERVER}/${info.img}`} alt="" />
        </div>
      <div className="text">{info.title}</div>
    </Link>
  )
}
