import React from 'react';
import c from './Messages.module.css';


const Messages = (props) =>{
    return (
    <div class={c.message}>{props.msg}</div>
    )
}

export default Messages