import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './assets/scss/style.scss';
import Myprofile from './components/Myprofile/MyProfile';
import Contacts from './components/contacts/Contacts';
import Chat from './components/chat/Chat';
import './app.scss';


function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <div className='app__wrapper'>
          <Myprofile /> 
          <Contacts />
        </div>
        <Switch>
          <Route path="/chat/:id" children={<Chat />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
