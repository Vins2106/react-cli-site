import React, { useState, useEffect } from 'react';

const Message = ({message, settings}) => {
  return (
  	<span 
  	className={`txt ${settings.color} ${message.margin ? 'txt-margin' : ''}`}>{message.echo ? "@react-cli-site/v1.0.0 >⠀" : ""}{message.content}</span>
  )  
}

export default Message;		