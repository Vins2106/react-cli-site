import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import Message from './parts/Message.js';
import Input from './parts/Input.js';

function App() {
  const dummy = useRef();

  const [messages, setMessages] = useState([
      {
        content: "React cli site [v1.0.0]",
        echo: false,
        user: false
      },
      {
        content: "(C) Vins 2106. All rights reserved.",
        echo: false,
        user: false,
        margin: true
      }
    ]);
  const [txt, setTxt] = useState('');
  let tempSettings = JSON.parse(localStorage.getItem("settings")) || {
    color: 'a',
    username: 'RCS@User',
    echo: true
  }
  const [settings, setSettings] = useState({
    color: tempSettings.color,
    username: tempSettings.username,
    echo: tempSettings.echo
  });
  const [processing, setProcessing] = useState({
    type: false,
    display: "block"
  });

  const sendMessage = (obj) => {
    setMessages([
      ...messages,
      {
        content: txt,
        user: true,
        echo: settings.echo
      },
      obj
    ])
  } 


  useEffect(() => {
    let input = document.getElementById("input");
    if (input) {
      input.focus();
    }
    localStorage.setItem("settings", JSON.stringify({
      color: settings.color,
      username: settings.username,
      echo: settings.echo
    }))
    console.log('[SETTINGS]: updated!');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }, [settings, messages])

  const focusHandler = () => {
    document.getElementById("input").focus();
  }

  return (
    <div className="app" onClick={focusHandler}>
      <div className="container">
        <div className="messages" id="messages">
          {messages.map(message => (
            <Message 
            message={message} 
            settings={settings} />
          ))}
        </div>
        {settings.disableInput ? "" : <Input 
        txt={txt} 
        setTxt={setTxt}
        settings={settings}
        setSettings={setSettings} 
        processing={processing} 
        setProcessing={setProcessing}
        messages={messages}
        addMessage={sendMessage}
        setMessages={setMessages}
         />}

         <span ref={dummy}></span>
      </div>
    </div>
  );
}

export default App;
