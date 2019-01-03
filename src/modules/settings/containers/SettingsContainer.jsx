import React, { Component } from "react";
import SettingsComponent from "../components/SettingsComponent";

export default class SettingsContainer extends Component {
    render(){
        return(
            <SettingsComponent {...this.props} />
        )
    }
}