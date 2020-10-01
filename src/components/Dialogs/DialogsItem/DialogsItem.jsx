import React from 'react';
import c from './DialogsItem.module.css';
import { NavLink } from 'react-router-dom';

const DilogsItem = props =>{
    const path = '/dialogs/'+props.id
    return (
        <div className={c.item}>
            <img src="https://i.yapx.ru/CGcE7.jpg" alt="" class={c.icon}/>
            <NavLink to={path} activeClassName={c.active}>{props.name}</NavLink>                    
        </div>
    )
}

export default DilogsItem