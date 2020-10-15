import React from 'react';
import c from './Dialogs.module.css';
import Messages from './Messages/Messages';
import DilogsItem from './DialogsItem/DialogsItem'; 
import {newMessageActionCreator, sendMessageActionCreator } from '../../redux/dialogReduser'


const Dialogs = (props) => {
    debugger

        
    const dialogs = props.state.dialogsData.map(dialog => 
        <DilogsItem name={dialog.name} id={dialog.id} />
    )

    const message = props.state.messagesData.map(message => <Messages msg={message.message}/>)
    
    const newMessage = props.state.newMessage

    const onMessageChange = (e) => {
        const texbody = e.target.value

        const action = newMessageActionCreator(texbody)
        props.dispatch(action)

    }
    const sendMessage = () => {
        props.dispatch(sendMessageActionCreator())
        // newMessage.current.value = ''
    }

    return(
        <div class={c.dialog}>
            <div className={c.dialogs}>
                <div class={c.dialogItems}>
                    {dialogs}
                </div> 
                <div className={c.messages}>
                    {message}
                </div>
            </div>
            
            <div className={c.tarea}>
                <textarea onChange={onMessageChange} value={newMessage} className={c.txtarea} placeholder="Your message"></textarea>
                <button className={c.btn} onClick={sendMessage}>Send</button>
            </div>
            
        </div>
    )
}

export default Dialogs