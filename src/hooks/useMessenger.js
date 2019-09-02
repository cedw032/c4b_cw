import {useState, useRef} from 'react';
import moment from 'moment';
import useSocket from './useSocket';

const useMessenger = () => {

	const [log, setLog] = useState([]);
	const logRef = useRef();
	logRef.current = log;

	const addToLog = message => setLog([
		...logRef.current, 
		{
			...message,
			at: moment(message.at),
		},
	]);

	const socket = useSocket({
		message: addToLog,
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