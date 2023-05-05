import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

/** ListingForm
 *
 */
function ListingForm() {

	const genres = ['Apartment', 'House', 'Loft', 'Cottage', 'Cabin', 'Villa'];
	const states = [
		'AL',
		'AK',
		'AZ',
		'AR',
		'CA',
		'CO',
		'CT',
		'DE',
		'FL',
		'GA',
		'HI',
		'ID',
		'IL',
		'IN',
		'IA',
		'KS',
		'KY',
		'LA',
		'ME',
		'MD',
		'MA',
		'MI',
		'MN',
		'MS',
		'MO',
		'MT',
		'NE',
		'NV',
		'NH',
		'NJ',
		'NM',
		'NY',
		'NC',
		'ND',
		'OH',
		'OK',
		'OR',
		'PA',
		'RI',
		'SC',
		'SD',
		'TN',
		'TX',
		'UT',
		'VT',
		'VA',
		'WA',
		'WV',
		'WI',
		'WY',
	];
	const navigate = useNavigate();
	const handleFileUpload = (event, setFieldValue) => {
		const files = Array.from(event.target.files);
		setFieldValue('files', files);
	};

	const handleSubmit = async values => {
		try {
			console.log('values', values);
			// Create a FormData object
			const formData = new FormData();
			// Append the selected file to the FormData object
			// TODO: make this work for multiple files
			formData.append('image', values.files[0]);
			// Make a POST request to the /upload-image endpoint with the FormData object
			const response = await axios.post(
				'http://localhost:3001/upload-image',
				formData,
				{
					headers: {
						'Content-Type': 'multipart/form-data',
					},
				}
			);
			console.log("response:", response);
			// Handle the response from the server
			// delete values.files;
			values.imageUrl = response.data.imageUrl;
			values.userId = 1;
				console.log("values123:", values);
				delete values.files;
			const listingResp = await axios.post(
				'http://localhost:3001/listings/',
				values
			);
			navigate(`/listing/${listingResp.data.listingId}`);
			//TODO: navigate after adding to db
		} catch (error) {
			// Handle the error
			console.error(error);
		}
	};
	return (
		<div className='ListingForm d-flex flex-column w-50'>
      <p>New Listing</p>
			<Formik
				initialValues={{
					name: 'Listing Name',
					description: 'Listing Description',
					price: '123',
					street: '123 Main St.',
					city: 'Tokyo',
					state: 'FL',
					zip: '12345',
					genre: 'House',
					files: '',
				}}
				validate={values => {
					const errors = {};
					console.log('values:', values);
					if (!values.name) {
						errors.name = 'Name Required';
					}
					if (!values.description) {
						errors.description = 'Description Required';
					}
					if (!values.price) {
						errors.price = 'Price Required';
					} else if (!/^\d+$/.test(values.price)) {
						errors.price = 'Price must be a positive integer';
					}
					if (!values.street) {
						errors.street = 'Street Required';
					}
					if (!values.city) {
						errors.city = 'City Required';
					}
					if (!values.state || values.state === 'State') {
						errors.state = 'State Required';
					} else if (!/^[A-Z]{2}$/.test(values.state)) {
						errors.state = 'State must be a 2-character all caps state code';
					}
					if (!values.zip) {
						errors.zip = 'Zip Required';
					} else if (!/^\d{5}$/.test(values.zip)) {
						errors.zip = 'Invalid zip code';
					}
					if (!values.genre) {
						errors.genre = 'Genre Required';
					}
					if (!values.files || values.files.length === 0) {
						errors.files = 'Photo(s) Required';
					}

					return errors;
				}}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						// handle the submit
						handleSubmit(values);
						setSubmitting(false);
					}, 400);
				}}>
				{({ isSubmitting, setFieldValue }) => (
					<Form>
						<div className='form-group row align-items-center'>
							<label
								htmlFor='name'
								className='col-sm-2 col-form-label'>
								Name
							</label>
							<div className='col-sm-10'>
								<Field
									type='text'
									name='name'
									placeholder='Name'
									className='form-control'
								/>
								<ErrorMessage
									name='name'
									component='div'
									className='text-danger'
								/>
							</div>
						</div>
						<div className='form-group row align-items-center'>
							<label
								htmlFor='description'
								className='col-sm-2 col-form-label'>
								Description
							</label>
							<div className='col-sm-10'>
								<Field
									as='textarea'
									name='description'
									placeholder='Description'
									className='form-control'
								/>
								<ErrorMessage
									name='description'
									component='div'
									className='text-danger'
								/>
							</div>
						</div>
						<div className='form-group row align-items-center'>
							<label
								htmlFor='price'
								className='col-sm-2 col-form-label'>
								Price
							</label>
							<div className='col-sm-10'>
								<Field
									type='text'
									name='price'
									placeholder='Price'
									className='form-control'
								/>
								<ErrorMessage
									name='price'
									component='div'
									className='text-danger'
								/>
							</div>
						</div>
						<div className='form-group row'>
							<label
								htmlFor='address'
								className='col-sm-2 col-form-label'>
								Address
							</label>
							<div className='col-sm-3'>
								<Field
									type='text'
									name='street'
									placeholder='Street'
									className='form-control'
								/>
								<ErrorMessage
									name='street'
									component='div'
									className='text-danger'
								/>
							</div>
							<div className='col-sm-3'>
								<Field
									type='text'
									name='city'
									placeholder='City'
									className='form-control'
								/>
								<ErrorMessage
									name='city'
									component='div'
									className='text-danger'
								/>
							</div>
							<div className='col-sm-2'>
								<Field
									as='select'
									name='state'
									className='form-control'>
									<option
										value=''
										disabled>
										State
									</option>
									{states.map(state => (
										<option
											key={state}
											value={state}>
											{state}
										</option>
									))}
								</Field>
								<ErrorMessage
									name='state'
									component='div'
									className='text-danger'
								/>
							</div>
							<div className='col-sm-2'>
								<Field
									type='text'
									name='zip'
									placeholder='Zip'
									className='form-control'
								/>
								<ErrorMessage
									name='zip'
									component='div'
									className='text-danger'
								/>
							</div>
						</div>
						<div className='form-group row align-items-center'>
							<label
								htmlFor='genre'
								className='col-sm-2 col-form-label'>
								Genre
							</label>
							<div className='col-sm-10'>
								<Field
									as='select'
									name='genre'
									className='form-control'>
									<option
										value=''
										disabled>
										Choose a genre
									</option>
									{genres.map(genre => (
										<option
											key={genre}
											value={genre}>
											{genre}
										</option>
									))}
								</Field>
								<ErrorMessage
									name='genre'
									component='div'
									className='text-danger'
								/>
							</div>
						</div>
						<div className='form-group row align-items-center'>
							<label
								htmlFor='photo'
								className='col-sm-2 col-form-label'>
								Photo
							</label>
							<div className='col-sm-10'>
								<input
									type='file'
									name='files'
									className='form-control-file'
									onChange={event => handleFileUpload(event, setFieldValue)}
									multiple
								/>
								<ErrorMessage
									name='files'
									component='div'
									className='text-danger'
								/>
							</div>
						</div>
						<div className='form-group row'>
							<div className='col-sm-10 offset-sm-2'>
								<button
									type='submit'
									className='btn btn-primary'
									disabled={isSubmitting}>
									Submit
								</button>
							</div>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
}

export default ListingForm;
