import {Routes, Route} from 'react-router-dom';
import Listing from './Listing';
import ListingForm from './ListingForm';

function RoutesList (){
  <Routes>
<Route path="/listing/:id" element={<Listing />} />
<Route path="/listing/new" element={<ListingForm />} />
  </Routes>
}

export default RoutesList;