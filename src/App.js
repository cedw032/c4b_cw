import React, {useState} from 'react';

import useSocket from './hooks/useSocket';
import ChatBox from './components/ChatBox'

import './App.css';

function App() {

	const [isBusinessAvailable, setIsBusinessAvailable] = useState(false);
	useSocket({isBusinessAvailable: a => console.log('A', a) || setIsBusinessAvailable(a)});

	if (!isBusinessAvailable) return null;

	return (
		<div className='app'>
			<ChatBox />
		</div>
	);
}

export default App;
