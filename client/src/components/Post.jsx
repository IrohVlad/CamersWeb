import React from 'react'

export default function Post({info}) {
  return (
    <li key={info.id} className="post_button">
        <div className="post__text">{info.text}</div>

        <div className="post__info">
            <div className="delete__button _btn">Удалить</div>
            <div className="change__button _btn">Изменить</div>
            <div className="post__date ">{info.createdAt}</div>
        </div>
    </li> 
  )
}
