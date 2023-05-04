import "./App.css";
import { BrowserRouter } from "react-router-dom";

import RoutesList from './RouteList';

/** App
 *
 */

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <RoutesList />
      </div>
    </BrowserRouter>
  );
}

export default App;
