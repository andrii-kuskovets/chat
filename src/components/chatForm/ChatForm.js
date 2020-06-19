import React, {useState, useEffect} from 'react';
import Icon from '../Icons/index';
import {useParams} from "react-router-dom";
import {USERS} from '../../constatns';

function ChatForm({message, addMessage}) {
    const [value, setValue] = useState('');
    const [hasError, setErrors] = useState(false);
    const [jokes, setJokes] = useState('');

    let { id } = useParams();
    let msgDate = new Date();
    let date = `${msgDate.getMonth() + 1}/${msgDate.getDate()}/${msgDate.getFullYear().toString().substr(-2)}`;
    let hours = msgDate.getHours();
    let minutes = msgDate.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    let time = hours + ':' + minutes + ' ' + ampm;
    let idMessage = USERS[id].MessagesData.length;
    let online = USERS[id].online;

    const clearState = () => {
        setValue('')
    }

    useEffect(() => {
        async function fetchData() {
        const res = await fetch("https://api.chucknorris.io/jokes/random");
        res
            .json()
            .then(res => setJokes(res.value))
            .catch(err => setErrors(err));
        }

        fetchData();
    });

    const send = (a) => {
        message.push(a);
        const newAddMessage = [...message];
        addMessage(newAddMessage);
        clearState()
    } 
    const newMessage = {id: idMessage + 1 , message: value, date: date, time: time, sender: 'me'};
    const newJoke = {id: idMessage + 1 , message: jokes, date: date, time: time, sender: 'user'};

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (value !== '') {
            send(newMessage)
        } if (value !== '' && online === true) {
            setTimeout(send(newJoke), 10000);
        } else {
            
        }
    }

    return (
        <form 
            className="chat__form"
            onSubmit={handleSubmit}
        >
            <input 
                className="chat__input" 
                type="textarea" 
                placeholder="Type your message"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <button type="submit" className="chat__send-button">
                <Icon className="chat__icon" name="send" />
            </button>
        </form>
    )
}

export default ChatForm;