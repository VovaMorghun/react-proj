import React from 'react';
import c from './Dialogs.module.css';
import Messages from './Messages/Messages';
import DilogsItem from './DialogsItem/DialogsItem'; 



const Dialogs = (props) => {
    debugger

        
    const dialogs = props.state.dialogsData.map(dialog => 
        <DilogsItem name={dialog.name} id={dialog.id} />
    )

    const message = props.state.messagesData.map(message => <Messages msg={message.message}/>)
    
    const newMessage = props.state.newMessage

    const onMessageChange = (e) => {
        const textbody = e.target.value

        props.newMessageBody(textbody)


    }
    const sendMessage = () => {
        props.sendNewMessage()
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