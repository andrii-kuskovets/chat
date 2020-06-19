import React from 'react';
import {USERS} from '../../constatns';
import {Link} from "react-router-dom";
import Icon from '../Icons/index';
import './_contacts.scss';

function Contacts() {
    return (
        <div className="contacts">
            <div className="container">
                <h2 className="contacts__title">Chat</h2>
            </div>
            <ul className="contacts__list">
                {USERS.map( item => (
                    <Link to= {`/chat/${item.id}`} style={{ textDecoration: 'none' }}>
                        <li key={item.id} className="user">
                            <div className="container">
                                <div className="user__wrapper">
                                    <div className="photo">
                                        <img src={item.photo} alt='user'/>
                                        <>
                                            {item.online === true ? (
                                                <Icon className="photo__icon" name="check" />
                                            ) : (
                                                <span></span>
                                            )}
                                        </>
                                    </div>
                                    <div className="user__description">
                                        <h3 className="user__name">{item.fullName}</h3>
                                        <span>
                                            {item.MessagesData.map(msg => msg.date)[
                                                item.MessagesData.length - 1
                                                ]
                                            }
                                        </span>
                                        <p className="user__last-message">
                                            {item.MessagesData.map(msg => msg.message)[
                                                item.MessagesData.length - 1
                                                ]
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
}

export default Contacts;