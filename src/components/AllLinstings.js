import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocalStorage } from '../useLocalStorage';
import ListingsCard from '../common/ListingsCard';

function Lisitngs() {
	// gets all the data from the axios request//
	const [ListingsData, setListingsData] = useState([]);
	// All the property listings for UI display//
	const [allLisitngs, setAllLisitngs] = useState([]);
	// State that controls the radio buttons checkboxes//
	const [isChecked, setIsChecked] = useLocalStorage('isChecked', {});

	useEffect(() => {
		const getListings = async () => {
			try {
				// url from the json-server db //
				let res = await axios.get('http://localhost:4000/listings');
				setListingsData(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		getListings();
	}, []);

	// Adds the item "All" for our select option//
	let getAllListings = ListingsData.map((item) => item.address);
	getAllListings.unshift('All');

	const handleChange = (e) => {
		const data = ListingsData.find(
			(item) => item.address === e.target.value
		);
		getAllListings.forEach((item) => {
			if (e.target.value === item) {
				setAllLisitngs([data]);
				// setCheckBoxList({});
			} else if (e.target.value === 'All') {
				setAllLisitngs(ListingsData);
			}
		});
	};

	const handleCheckBox = (e) => {
		const clonedIsChecked = { ...isChecked };

		clonedIsChecked[e.target.name] = e.target.value;
		setIsChecked(clonedIsChecked);
	};

	console.log('listings data =>', ListingsData);
	console.log('All listings =>', allLisitngs);

	if (ListingsData.length === 0) return <h2>Loading...</h2>;
	return (
		<div className='container mt-2'>
			<form>
				<select
					className='form-select w-25'
					aria-label='select listings'
					onChange={handleChange}>
					{getAllListings.map((item, idx) => (
						<option key={idx}>{item}</option>
					))}
				</select>
			</form>
			<div className='row mt-4 row-cols-1'>
				{allLisitngs.length > 0 &&
					allLisitngs.map((item) => (
						<ListingsCard
							key={item.id}
							onItem={item}
							onHandleCheckBox={handleCheckBox}
							onIsChecked={isChecked}
						/>
					))}
			</div>
		</div>
	);
}

export default Lisitngs;
