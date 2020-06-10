import React from 'react';
import Icon from '../Icons/index';

function ChatForm() {
    return (
        <form className="chat__form">
            <input className="chat__input" type="textarea" placeholder="Type your message" />
            <button type="submit" className="chat__send-button">
                <Icon className="chat__icon" name="send" />
            </button>
        </form>
    )
}

export default ChatForm;