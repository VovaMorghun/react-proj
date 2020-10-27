import React from 'react';
import c from './Dialogs.module.css';
import Messages from './Messages/Messages';
import DilogsItem from './DialogsItem/DialogsItem';
import {newMessageActionCreator, sendMessageActionCreator } from '../../redux/dialogReduser'
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    debugger

    const state = props.store.getState().dialogsPage



    const onMessageChange = (textbody) => {


        const action = newMessageActionCreator(textbody)
        props.dispatch(action)

    }
    const sendMessage = () => {
        props.dispatch(sendMessageActionCreator())
        // newMessage.current.value = ''
    }

    return(
        < Dialogs  newMessageBody={onMessageChange } sendNewMessage={sendMessage}
        dialogsPage={state} />
    )
}

export default DialogsContainer