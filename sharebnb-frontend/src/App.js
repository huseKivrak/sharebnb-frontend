import './App.css';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
import RoutesList from './RouteList';

/** App
 *
 */

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<h1>ShareBnB</h1>
				<NavBar />
				<RoutesList />
			</div>
		</BrowserRouter>
	);
}

export default App;
