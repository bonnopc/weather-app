import React, { Component, Fragment } from "react";
import { IoIosSettings } from "react-icons/io";

export default class SettingsComponent extends Component {
    render(){
        return(
            <Fragment>
                <div className="settings-icon">
                    <IoIosSettings/>
                </div>
            </Fragment>
        )
    }
}