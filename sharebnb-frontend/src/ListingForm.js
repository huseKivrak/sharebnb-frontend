import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

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

	return (
		<div className='ListingForm d-flex flex-column w-50'>
			<Formik
				initialValues={{
					name: '',
					description: '',
					price: '',
					street: '',
					city: '',
					state: '',
					zip: '',
					genre: '',
				}}
				validate={values => {
					const errors = {};

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
					if (!values.state) {
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

					return errors;
				}}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						// handle the submit
						setSubmitting(false);
					}, 400);
				}}>
				{({ isSubmitting }) => (
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
