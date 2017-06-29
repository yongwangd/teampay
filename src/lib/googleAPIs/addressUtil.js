const apiKey = 'AIzaSyAJAmwOGIGRlWliaI2YbW53FwvHerVfIaE';

export const createGooglePlaceUrl = placeId => `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${apiKey}`;

export const createGoogleReverseGeocodingUrl = (latitude, longitude) => `https://maps.googleapis.com/maps/api/geocode/json?key=${apiKey}&latlng=${latitude},${longitude}`

export const createGoogleAutoCompleteUrl = input => `https://maps.googleapis.com/maps/api/place/autocomplete/json?&input=${encodeURI(input)}&key=${apiKey}`


export const parseGooglePlaceDetail = addressComponent => {
	let map = {
		number: 'street_number',
		street: 'route',
		city: 'locality',
		state: 'administrative_area_level_1',
		country: 'country',
		'postal': 'postal_code'
	};

	return Object.entries(map).reduce((acc, cur) => {
		let [key, name] = cur;

		let fou = addressComponent.find(ac => ac.types.includes(name));
		if (fou) {
			acc[key] = fou.short_name;
		}
		return acc;
	}, {});
};

export const parseAutocompleteAddress = terms => {
	let map = ['country', 'state', 'city', 'street', 'number'];
	let parts = {};
	terms.reverse().forEach((data, idx) => {
		parts[map[idx]] = data.value;
	});

console.log('partssss', parts);
	return parts;
}