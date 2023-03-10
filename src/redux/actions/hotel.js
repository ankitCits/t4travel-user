import { BASE_URL } from '../../config';
import { getAccessToken } from '../../storage';
import { HOTEL_SEARCH, HOTEL_SEARCH_SUCCESS,HOTEL_SEARCH_FAILED } from '../constants';


export const searchCity = (payload) => {
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

export const searchHotel = (Payload) => {
    console.log("REQ_HOTEL_SEARCH_WITH_PAYLOAD : ", Payload)

    return async dispatch => {

        try {
            let accessToken = await getAccessToken()
            let myHeaders = new Headers();
            myHeaders.append("Authorization", `token ${accessToken}`);

            var formdata = new FormData();
            formdata.append("CheckInDate", Payload.CheckInDate);
            formdata.append("NoOfNights", Payload.NoOfNights);
            formdata.append("CountryCode", Payload.CountryCode);
            formdata.append("CityId", Payload.CityId);
            formdata.append("PreferredCurrency", Payload.PreferredCurrency);
            formdata.append("GuestNationality", Payload.GuestNationality);
            formdata.append("NoOfRooms", Payload.NoOfRooms);
            formdata.append("NoOfAdults", Payload.NoOfAdults);
            formdata.append("NoOfChild", Payload.NoOfChild);
            formdata.append("MaxRating", Payload.MaxRating);
            formdata.append("MinRating", Payload.MinRating);
            formdata.append("EndUserIp", Payload.EndUserIp);
            
            var requestOptions = {
              method: 'POST',
              headers: myHeaders,
              body: formdata,
              redirect: 'follow'
            };

            // return Payload

            const fetHotel = await fetch(`${BASE_URL}/hotel-search/`, requestOptions)
            const fetchHotelResult = await fetHotel.json();
            // console.log("HOTEL_FETCH : ", fetchHotelResult)
            if (fetchHotelResult.status_code == 1) {
                console.log("HOTEL_FETCH_STATUS_TRUE")
                // dispatch({
                //     type: HOTEL_SEARCH_SUCCESS,
                //     data: fetchHotelResult,
                //     // message: '',
                //     // status: 'Succuss',
                // });

                return fetchHotelResult
            } else {
                console.log("HOTEL_FETCH_FALSE",fetchHotelResult)
                return fetchHotelResult
            }


        } catch (error) {

            console.error(error);

        }

    };

}



export const searchHotelDetail = (payload) => {
    console.log("REQ_HOTEL_SEARCH_DETAIL : ", payload)

    return async dispatch => {

        try {
            let myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                myHeaders.append("Authorization", "token 6a00c825a108b82148a7741b634e2e16c8ca0716");

            let formdata = new FormData();
                formdata.append("EndUserIp", "123.1.1.1");
                formdata.append("TraceId", payload.TraceId);
                formdata.append("ResultIndex", payload.ResultIndex);
                formdata.append("HotelCode", payload.HotelCode);

            let requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: formdata,
                redirect: 'follow'
                };

            // return Payload

            const fetchHotelDetail = await fetch(`${BASE_URL}/hotel-info/`, requestOptions)
            const fetchHotelDetailResult = await fetchHotelDetail.json();
            // console.log("CITY_FETCH_IN_API : ", fetchHotelDetailResult)
            if (fetchHotelDetailResult.status_code == 1) {
                console.log("HOTEL_DETAIL_STATUS_TRUE")
                // dispatch({
                //     type: HOTEL_SEARCH_SUCCESS,
                //     data: fetchHotelDetailResult,
                //     // message: '',
                //     // status: 'Succuss',
                // });

                return fetchHotelDetailResult
            } else {
                console.log("HOTEL_DETAIL_FALSE")
                return fetchHotelDetailResult
            }


        } catch (error) {

            console.error(error);

        }

    };

}