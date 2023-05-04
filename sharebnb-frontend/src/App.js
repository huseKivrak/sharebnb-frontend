import './App.css';
import ListingForm from './ListingForm';

function App() {

  async function handleUpload(data){

console.log("data:", data);
  }

  return (
    <div className="App">
      <ListingForm handleUpload={handleUpload}/>
    </div>
  );
}

export default App;
