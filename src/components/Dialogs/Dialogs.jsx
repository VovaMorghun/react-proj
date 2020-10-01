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