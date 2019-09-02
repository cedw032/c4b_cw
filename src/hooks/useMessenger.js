import {useState} from 'react';
import moment from 'moment';
import useSocket from './useSocket';

const useMessenger = () => {

	const [log, setLog] = useState([]);

	const addToLog = message => setLog([
		...log, 
		{
			...message,
			at: moment(message.at),
		},
	]);

	const socket = useSocket({
		message: message => console.log('MESSAGE', message) || addToLog(message),
	});

	const sendMessage = content => {
		
		const message = {
			at: moment().toISOString(),
			from: 'me',
			content,
		}

		addToLog(message);
		socket.emit('message', message)
	};

	return [log, sendMessage]
};

export default useMessenger;