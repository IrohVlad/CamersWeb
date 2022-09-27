import React from 'react';
import axios from 'axios';

const AdminContent = ({item, fetch, func}) => {
    return (
        <div className="main-content">
            {Object.keys(item).map(key => { 
                return<div>
                    {Object.keys(item[key]).map(i => {
                    if (i == 'img' || i == 'icon'){
                        return <div>
                        <input type="file" onChange={e => {func({...item,[key]:{...item[key], [i]: e.target.files[0]}})}}></input>
                        <span>{i}</span>
                        </div>
                    }
                    else if(i == 'id' || i == 'logo'){
                        return "";
                    }
                    else{
                        return <div>
                        <textarea onChange={(e)=>{func({...item,[key]:{...item[key], [i]: e.target.value}})}} type="text" value={item[key][i]}></textarea>
                        <span>{i}</span>
                        </div>
                    }
                    })}
                    <button onClick={(e)=>{
                        const form = new FormData();
                        Object.keys(item[key]).forEach(elem => {
                            form.append( elem, item[key][elem]);
                        })
                        console.log({...item[key]});
                        fetch("PATCH", form, func);
                    }} >Изменить</button>
                    <button onClick={(e)=>{
                        const form = new FormData();
                        Object.keys(item[key]).forEach(elem => {
                            form.append( elem, item[key][elem]);
                        })
                        console.log({...item[key]});
                        fetch("DELETE", form, func);
                    }} >Удалить</button>
                </div>
                
            })}
            <button onClick={()=>{
                fetch("POST", {}, func);
            }}>Создать</button>
        </div>
    );
};

export default AdminContent;