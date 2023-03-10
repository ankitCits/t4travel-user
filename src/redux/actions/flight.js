import { BASE_URL } from '../../config';
// import { getAccessToken } from '../../storage';
// import { HOTEL_SEARCH, HOTEL_SEARCH_SUCCESS,HOTEL_SEARCH_FAILED } from '../constants';


export const searchFlight = (payload) => {
    console.log("REQ_HOTEL_SEARCH_WITH_payload : ", payload)

    return async dispatch => {

        try {
            let formdata = new FormData();
                formdata.append("value", payload);

            let requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
                };

            // return Payload

            const fetchCity = await fetch(`${BASE_URL}/city-id-search/`, requestOptions)
            const fetchCityResult = await fetchCity.json();
            // console.log("CITY_FETCH_IN_API : ", fetchCityResult)
            if (fetchCityResult.status_code == 1) {
                console.log("CITY_FETCH_STATUS_TRUE")
                // dispatch({
                //     type: HOTEL_SEARCH_SUCCESS,
                //     data: fetchCityResult,
                //     // message: '',
                //     // status: 'Succuss',
                // });

                return fetchCityResult
            } else {
                console.log("CITY_FETCH_FALSE")
                return fetchCityResult
            }


        } catch (error) {

            console.error(error);

        }

    };

}