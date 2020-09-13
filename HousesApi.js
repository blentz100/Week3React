const HOUSES_ENDPOINT = "https://ancient-taiga-31359.herokuapp.com/api/houses";

class HousesApi{
	/*This get request will get the list of houses from API */
	get = async () => {
		try {
			console.log('inside try block for fetching house');
		const resp = await fetch(HOUSES_ENDPOINT);
		const data = await resp.json();
		return data;
		}catch(e){
			console.log('oops, looks like fetchHouses had an issue.',e);
		}
	}

	/*This put request will add new rooms or delete rooms from our house*/
	put = async (house) => {
		try {
			console.log('inside try block for updating houses');
			const resp = await fetch(`${HOUSES_ENDPOINT}/${house._id}`, { 
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(house)
			});
			console.log('body is: ' + JSON.stringify(house));
			console.log ('resp.json is' + resp.json());
			return await resp.json();
		} catch(e){
			console.log('oops, looks like we had an issue updating our house .',e);
		}
	}
}

export const housesApi = new HousesApi();
