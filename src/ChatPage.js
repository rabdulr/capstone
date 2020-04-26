import React, {useState, useEffect} from 'react';
import axios from 'axios';

const ChatPage = ({ chatMessages, setChatMessages, displayChat, socket, auth, params, headers, route })=>{
    const [message, setMessage]= useState('')
    const messageObj = {senderId: auth.id, receiverId: params.id, username: auth.username, message: message};


    if (!params.id){
        params.id = "General Chat"
    }


    useEffect( () => {
        console.log("authID: ", auth.id)
        console.log("params.id", params.id)
        axios.get(`/api/chats/getChats/${auth.id}/${params.id}`)
        .then(chatHistory => console.log("chatHistory: ", chatHistory.data))

    }, []);

    const onSubmit = (ev)=>{
        ev.preventDefault();
        const socket = io();
        socket.emit('message', messageObj);
        setMessage('');

        //put message in db if direct message
        if(params.id !== 'General Chat'){
            axios.post('/api/chats/createChat', messageObj)
        }
    }
    return(
        <div className = 'columnNW grow1 vh80'>
            <div className = 'columnNW borderDB bgBB border5 marginHalf vh80 grow1'>
                <h4 className = 'centerText colorOW padHalf'>Chat with { params.id }</h4>
                <ul id = 'messages' className = 'columnNW borderDB bgOW colorDB border10 marginHalf grow1 vh80 scrollable'></ul>
                <form onSubmit={onSubmit} className = 'columnNW leftMarginHalf rightMarginHalf'>
                    <div className = 'rowNW widthundred'>
                        <input onChange= {({ target })=>setMessage(target.value) } value = {message} placeholder = 'Type a Message...' className = 'bottomLeft10 topLeft10 bgOW colorDB borderDB leftPadHalf widthundred' />
                        <input type = 'submit' className = 'bgOW colorDB borderDB bottomRight10 topRight10' value = 'Send' disabled = { !message }/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ChatPage
