import React from 'react';

const AdminContent = ({item, func}) => {
    return (
        <div className="main-content">
            {Object.keys(item).map(key => { 
                return<div>
                    {Object.keys(item[key]).map(i => {
                    if (i == 'img' || i == 'icon'){
                        return <div>
                        <input type="file"></input>
                        <span>{i}</span>
                        </div>
                    }
                    else{
                        return <div>
                        <textarea onChange={(e)=>{func([...item, {[i]: e.target.value}])}} type="text" value={item[key][i]}></textarea>
                        <span>{i}</span>
                        </div>
                    }
                    })}
                    <button>Изменить</button>
                    <button>Удалить</button>
                </div>
                
            })}
            <button>Создать</button>
        </div>
    );
};

export default AdminContent;