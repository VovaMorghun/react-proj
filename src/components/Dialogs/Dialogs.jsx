import React from 'react';
import c from './Dialogs.module.css';
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

const Messages = (props) =>{
    return (
    <div class={c.message}>{props.msg}</div>
    )
}





const Dialogs = () => {


        const dialogsData = [
            {id:1 , name: "Vova"},
            {id:2 , name: "Vasya"},
            {id:3 , name: "Petya"},
            {id:3 , name: "Petya"},
            {id:3 , name: "Petya"},
            {id:3 , name: "Petya"},
            {id:4 , name: "Yura"}
        ]

        const messagesData = [
            {id: 1 , message: "Hi"},
            {id: 2 , message: "Hello"},
            {id: 3 , message: "YO"},
            {id: 4 , message: "Yooo"},
        ]

    const dialogs = dialogsData.map(dialog => 
        <DilogsItem name={dialog.name} id={dialog.id} />
    )

    const message = messagesData.map(message => <Messages msg={message.message}/>)

    return(
        <div class={c.dialog}>
            <div class={c.dialogItems}>
                {dialogs}
            </div> 
            <div className={c.messages}>
                {message}
            </div>
        </div>
    )
}

export default Dialogs