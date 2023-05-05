import './App.css';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
import RoutesList from './RoutesList';
import { useState } from 'react';
/** App
 *
 */

function App() {
	const [currentUser, setCurrentUser] = useState(null);
	return (
		<BrowserRouter>
			<div className='App'>
				<h1>ShareBnB</h1>
				<NavBar />
				<RoutesList user={currentUser}/>
			</div>
		</BrowserRouter>
	);
}

export default App;
