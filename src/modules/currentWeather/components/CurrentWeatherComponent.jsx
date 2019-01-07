import React, { Component, Fragment } from "react";

export default class CurrentWeatherComponent extends Component {
    render(){
        console.log("CurrentWeatherComponent", this.props);
        return(
            <Fragment>
                CurrentWeatherComponent
            </Fragment>
        )
    }
}