import React, { Component, Fragment } from "react";
import { IoIosSettings } from "react-icons/io";

export default class SettingsComponent extends Component {
    componentDidMount(){
        this.searchForLocation();
    }

    searchForLocation = () => {
        this.props.action_ip_address_lookup()
        .then(res => {
            console.log("RES", res)
        })
        .catch(error => console.log("ERR", error));
    }

    render(){
        console.log("SettingsComponent", this.props);
        return(
            <Fragment>
                <div className="settings-icon">
                    <IoIosSettings/>
                </div>
            </Fragment>
        )
    }
}