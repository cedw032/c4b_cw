import {useState, useRef} from 'react';
import moment from 'moment';
import useSocket from './useSocket';

const useMessenger = id => {

	const [log, setLog] = useState([]);
	const logRef = useRef();
	logRef.current = log;

	const addToLog = message => setLog([
		...logRef.current, 
		message,
	]);

	const socket = useSocket({
		message: addToLog,
	});

	const sendMessage = content => {
		
		addToLog({
			from: id,
			at: moment().toISOString(),
			content,
		});
		socket.emit('message', {content})
	};

	return [log, sendMessage]
};

export default useMessenger;