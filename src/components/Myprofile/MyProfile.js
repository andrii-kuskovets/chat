import React from 'react';
import yourPhoto from "../../assets/img/people.png";
import Icon from '../Icons/index';
import './_myprofile.scss';

function Myprofile() {
    return (
        <div className="profile">
            <div className="container">
                <div className="profile__wrapper">
                    <div className="photo">
                        <img src={yourPhoto} alt="avatar"></img>
                        <Icon className="photo__icon" name="check" />
                    </div>
                    <div className="search">
                        <input className="search__input" type="text" placeholder="Search or start new chat" />
                        <Icon className="search__icon" name="search" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Myprofile;