import React, {useState} from 'react';
import cx from 'classnames';
import useMessenger from '../hooks/useMessenger';

const ChatBox = () => {

	const [log, sendMessage] = useMessenger();

	const [input, setInput] = useState('');

	const getMessageClassname = message => cx(
		'message',
		message.from === 'me' ? 'self' : 'peer',
	);

	return (
		<div className='panel'>
			<div className='panel message-box'>
				{log.map((message, i) => 
					<div 
						key={i}
						className={getMessageClassname(message)}>
						<span>{message.at.format('h:mma')} - </span>
						<span>{message.from}: </span>
						<span>{message.content}</span>
					</div>
				)}
				<input 
					value={input} 
					onChange={e => setInput(e.target.value)}
					onKeyDown={e => {
						if (e.key === 'Enter') {
							sendMessage(input);
							setInput('');
						}
					}}/>
			</div>
		</div>

		
	);
}

export default ChatBox;