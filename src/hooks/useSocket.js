import {useMemo} from 'react';
import io from 'socket.io-client';

//const socket = io.connect('http://localhost:5000');
const socket = io.connect('https://still-falls-37601.herokuapp.com/');

const useSocket = listeners => useMemo(() => {	
	Object.entries(listeners).forEach(([name, listener]) => {
		socket.on(name, listener);
	});
	return socket;
}, []);

export default useSocket;