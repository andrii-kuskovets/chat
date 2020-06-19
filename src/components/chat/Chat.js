import React, {useState, useEffect} from 'react';
import {USERS} from '../../constatns';
import {useParams} from "react-router-dom";
import Icon from '../Icons/index';
import ChatForm from '../chatForm/ChatForm';
import './_chat.scss';

function Chat() {
    const [chat, setChat] = useState([]);
    const [user, setUser] = useState({});
    let { id } = useParams();


    useEffect(() => {
        setChat(USERS[id].MessagesData)
        setUser(USERS[id])
    }, [id, setChat, setUser]);
    
    return (
        <div className='chat'>
            <div className="messages">
                <div className="messages__wrapper">
                    <div className="user-profile">
                        <div className="container">
                            <div className="user-profile__info">
                                <div className="photo">
                                    <img src={user.photo} alt='user'/>
                                    <>
                                        {user.online === true ? (
                                            <Icon className="photo__icon" name="check" />
                                        ) : (
                                            <span></span>
                                        )}
                                    </>
                                </div>
                                <h1 className="user-profile__title">{user.fullName}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        {chat.map(item => (
                            <div key={item.id} className="message">
                                <>
                                    {item.sender === 'user' ? (
                                        <div className="message__wrapper">
                                            <div className="photo photo_small">
                                                <img src={user.photo} alt="user" />
                                            </div>
                                            <div className="message__description">
                                                <div className="message__text">{item.message}</div>
                                                <div className="message__date">
                                                    {item.date}, {item.time}, 
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="message__wrapper message__wrapper_me">
                                            <div className="message__description message__description_me">
                                                <div className="message__text message__text_me">{item.message}</div>
                                                <div className="message__date message__date_me">
                                                    {item.date}, {item.time}, 
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        <ChatForm addMessage={setChat} message={chat}/>
    </div>
    
    );
}

export default Chat;