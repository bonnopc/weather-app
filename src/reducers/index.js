import { combineReducers } from "redux";

import { currentWeather } from "../../src/modules/currentWeather/reducers";
import { weatherForecast } from "../../src/modules/weatherForecast/reducers";
import { settings } from "../../src/modules/settings/reducers";

const appReducers = combineReducers({
    currentWeather,
    weatherForecast,
    settings
});

export default appReducers;