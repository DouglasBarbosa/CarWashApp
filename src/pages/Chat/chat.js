import React from 'react';
import Chatbot from 'react-chatbot-kit';

import './chat.css';

const Chat = () => {
	return (
		<div classNanme="chat-page">
			<div style={{ maxWidth: "300px" }}></div>
			//pacote utilizado no chatbot react-chat-kit
			<Chatbot />
		</div>
	);
}

export default Chat;