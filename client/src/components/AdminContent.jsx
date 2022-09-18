import React from 'react';

const AdminContent = ({refresh, item, fetch, func}) => {
    return (
        <div className="main-content">
            {Object.keys(item).map(key => { 
                return<div>
                    {Object.keys(item[key]).map(i => {
                    if (i == 'img' || i == 'icon' || i == 'logo'){
                        return <div>
                        <input type="file"></input>
                        <span>{i}</span>
                        </div>
                    }
                    else{
                        return <div>
                        <textarea onChange={(e)=>{func({...item,[key]:{...item[key], [i]: e.target.value}})}} type="text" value={item[key][i]}></textarea>
                        <span>{i}</span>
                        </div>
                    }
                    })}
                    <button onClick={(e)=>{
                        fetch("PATCH", {...item[key]});
                    }} >Изменить</button>
                    <button type='submit' onClick={()=>{
                        fetch("DELETE", {...item[key]});
                        refresh[1](++refresh[0]);
                    }} >Удалить</button>
                </div>
                
            })}
            <button onClick={()=>{
                fetch("POST", {});
                refresh[1](++refresh[0]);
            }}>Создать</button>
        </div>
    );
};

export default AdminContent;