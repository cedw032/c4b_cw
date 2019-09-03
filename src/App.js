import React, {useState, useEffect} from 'react';

import useSocket from './hooks/useSocket';
import usePersistentState from './hooks/usePersistentState';

import ChatBox from './components/ChatBox'

import uuidv1 from  'uuid/v1';

import './App.css';

function App() {

	const [isBusinessAvailable, setIsBusinessAvailable] = useState(false);
	const socket = useSocket({isBusinessAvailable: setIsBusinessAvailable});

	let id = localStorage.getItem('id');

	if (!id) {
		id = uuidv1();
		localStorage.setItem('id', id);
	}

	socket.emit('id', id);

	if (!isBusinessAvailable) return null;

	return (
		<div className='app'>
			<ChatBox id={id} />
		</div>
	);
}

export default App;
