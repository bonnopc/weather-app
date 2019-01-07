const INITIAL_STATE = {
    ipInfo: {}
};

export const settings = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case "GET_IP_ADDRESS_LOOKUP_RESOLVED":
            return { ...state, ipInfo: action.payload }
        default:
            return state;
    }
};
