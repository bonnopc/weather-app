import Axios from "axios";

export const action_ip_address_lookup = () => {
    return async dispatch => {
        dispatch({ type: "GET_IP_ADDRESS_LOOKUP_PENDING" })
        try{
            let url = "http://ip-api.com/json";
            var response = await Axios.get(url);
            
            if(response.status === 200 || response.status === 201){
                dispatch({
                    type: "GET_IP_ADDRESS_LOOKUP_RESOLVED",
                    payload: response.data
                })
            }

            return Promise.resolve(response);
        } catch (error) {
            dispatch({ type: "GET_IP_ADDRESS_LOOKUP_FAILED", payload: error })
            return Promise.reject(error);
        }
    }
}