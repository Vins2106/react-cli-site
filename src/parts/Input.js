import React, { useState, useEffect } from 'react';
import Commands from '../assets/commands.js';

const Input = ({txt, setTxt, settings, setSettings, messages, addMessage, setMessages}) => {

	function isBlank(str) {
	    return (!str || /^\s*$/.test(str));
	}

	const txtHandler = (e) => {
		let form = document.getElementById("form");

		if (e.target.value.endsWith("\n")) {
			return formHandler(null)
		}

		setTxt(e.target.value);
		e.target.style.height = "";
		e.target.style.height = e.target.scrollHeight + "px"
	}

	const formHandler = (e) => {
		if (e) {
			e.preventDefault();
		}

		if (isBlank(txt)) {
			return;
		}

		addMessage({
			content: txt,
			user: true,
			echo: settings.echo
		})

		let args = txt.split(/ +/g);
		let content = args[0];

		let cmd = Commands.find(x => x.name.toLowerCase() == content.toLowerCase())
		if (!cmd) {
			addMessage({
				content: `'${content}' is not a command. try to typing 'help'`,
				user: false,
				echo: false,
				margin: true
			});

			return setTxt('')
		}

		cmd.run(args, settings, setSettings, messages, addMessage, setMessages, window);
		return setTxt('')
	}

  return (
  	<div>
  		<form onSubmit={formHandler} className="form" id="form">
	  		<span
	  		className={`txt ${settings.color} echo`}>{settings.echo ? "@react-cli-site/v1.0.0 >⠀" : ""}</span>
	  		<input
	  		name="message" 
	  		id="input" 
	  		onChange={txtHandler}  
	  		autoComplete="off"
	  		value={txt}
	  		className={`input ${settings.color}`}
	  		>
	  		</input>
  		</form>
  	</div>
  )  
}

export default Input;