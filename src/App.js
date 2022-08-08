import './App.css';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';

function App() {
	return (
		<div className='App'>
			<DndProvider backend={Backend}>
				<h1>Hi</h1>
			</DndProvider>
		</div>
	);
}

export default App;
