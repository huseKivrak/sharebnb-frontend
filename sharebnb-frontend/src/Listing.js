import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Listing() {
	const [listing, setListing] = useState({
		name: '',
		description: '',
		price: '',
		street: '',
		city: '',
		state: '',
		zip: '',
		photoUrl: '',
	});
	const [isLoading, setIsLoading] = useState(true);
	const { id } = useParams();

	const HOSTNAME = process.env.HOSTNAME || 'http://localhost:3001';

	useEffect(
		function getAndSetListingOnMount() {
			async function getAndSetListing() {
				console.log('HOSTNAME', HOSTNAME);
				const resp = await axios.get(`${HOSTNAME}/listings/${id}`);
				console.log('resp', resp);
				console.log('resp.data', resp.data);
				setListing(resp.data.listing);
			}
			getAndSetListing();
			setIsLoading(false);
		},
		[id]
	);

	if (isLoading) return <p>Loading...!</p>;
	return (
		<div className='Listing'>
			<h3>{listing.name}</h3>
			<h5>{listing.genre}</h5>
			<p>{listing.description}</p>
			<img
				className='Listing-image'
				alt={listing.name}
				src={listing.photoUrl}
			/>
			<p>Cost: ${listing.price}</p>
			<p>
				Address: {listing.street},{listing.city}, {listing.state}, {listing.zip}
			</p>
		</div>
	);
}

export default Listing;
