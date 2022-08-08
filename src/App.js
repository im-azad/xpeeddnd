import './App.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Container from './components/Container';

function App() {
	return (
		<div className='App'>
			<DndProvider backend={HTML5Backend}>
				<Container></Container>
			</DndProvider>
		</div>
	);
}

export default App;