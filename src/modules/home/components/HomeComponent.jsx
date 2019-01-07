import React, { Component, Fragment } from "react";
// import { TiWorldOutline } from "react-icons/ti";
import moment from "moment";
import clearNoon from "../../../assets/bg/clear-noon.jpg";
import SettingsContainer from "../../settings/containers/SettingsContainer";
import CurrentWeatherContainer from "../../currentWeather/containers/CurrentWeatherContainer"

class CurrentTime extends Component {
    state = {
        currentTime: moment().format("hh:mm:ss a")
    }

    componentDidMount(){
        this.updateTime();
    }

    componentWillUnmount(){
        clearInterval(this.timeCheckDelay);
    }

    updateTime = () => {
        this.timeCheckDelay = setInterval(() => {
            this.setState({ currentTime: moment().format("hh:mm:ss a") });
        }, 1000);
    }

    render = () => (
        <Fragment>
            {this.state.currentTime}
        </Fragment>
    )
}

export default class HomeContainer extends Component {
    render(){
        return(
            <Fragment>
                <div 
                    style={{backgroundImage: `url(${clearNoon})`}}
                    className="main-container has-fill-bg-image shadow p-2">
                    {/* <TiWorldOutline/>
                    <span className="ml-2">Weather App Home</span> */}
                    <h1 className="text-center">
                        <CurrentTime/>
                    </h1>
                    <CurrentWeatherContainer/>
                </div>
                <SettingsContainer/>
            </Fragment>
        )
    }
}