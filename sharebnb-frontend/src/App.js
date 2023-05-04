import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

import RoutesList from './RouteList';

/** App
 *
 */

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<h1>ShareBnB</h1>
				<p>ShareBnB is a platform for sharing spaces.</p>
				<Link to='/listing/new'>New Listing</Link>
				<RoutesList />
			</div>
		</BrowserRouter>
	);
}

export default App;
