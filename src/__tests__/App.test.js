import { render, screen } from '@testing-library/react';
import App from '../App';
import listings from '../db';

test('renders learn react link', () => {
	render(<App />);
	const linkElement = screen.getByText(/Listings/i);
	expect(linkElement).toBeInTheDocument();
});

test('the listings data is correct', () => {
	expect(listings).toMatchSnapshot();
});

test('the listings data length is correct', () => {
	expect(listings['listings']).toHaveLength(4);
});

for (let i = 0; i < listings['listings'].length; i += 1) {
	test(`listings[${i}] should have properties(id, image, no_of_bedrooms, address, postcode, desc, asking_price, status)`, () => {
		expect(listings['listings'][i]).toHaveProperty('id');
		expect(listings['listings'][i]).toHaveProperty('image');
		expect(listings['listings'][i]).toHaveProperty('no_of_bedrooms');
		expect(listings['listings'][i]).toHaveProperty('address');
		expect(listings['listings'][i]).toHaveProperty('postcode');
		expect(listings['listings'][i]).toHaveProperty('desc');
		expect(listings['listings'][i]).toHaveProperty('asking_price');
		expect(listings['listings'][i]).toHaveProperty('status');
	});
}

test('listings data has postcode 99501 and matches an object', () => {
	const listingA = {
		id: 1,
		image: 'https://media.istockphoto.com/photos/modern-bedroom-interior-stock-photo-picture-id1299098384?b=1&k=20&m=1299098384&s=170667a&w=0&h=Bxi7LTyH5PtX_cS0TEtf7fCUqjQg3VsZSGw3fMlMdio=',
		no_of_bedrooms: 4,
		address: '4262 Geneva Street, Alaska',
		postcode: 99501,
		desc: 'Four bedroom apartment, suitable for a family of 5',
		asking_price: 50,
		status: true,
	};

	expect(listings['listings'][0]).toMatchObject(listingA);
});

test('status to show true twice and false twice', () => {
	expect(listings['listings'].map((listing) => listing.status)).toEqual([
		true,
		false,
		false,
		true,
	]);
});

test('each listing is different', () => {
	expect(listings['listings'][0]).not.toBe(listings['listings'][1]);
	expect(listings['listings'][0]).not.toBe(listings['listings'][2]);
	expect(listings['listings'][0]).not.toBe(listings['listings'][3]);
	expect(listings['listings'][1]).not.toBe(listings['listings'][2]);
	expect(listings['listings'][1]).not.toBe(listings['listings'][3]);
	expect(listings['listings'][2]).not.toBe(listings['listings'][3]);
});
