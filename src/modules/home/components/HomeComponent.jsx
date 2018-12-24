import React, { Component, Fragment } from "react";
import { TiWorldOutline } from "react-icons/ti";

export default class HomeContainer extends Component {
    render(){
        return(
            <Fragment>
                <div className="container shadow p-2 mt-4">
                    <TiWorldOutline/>
                    <span className="ml-2">Weather App Home</span>
                </div>
                
            </Fragment>
        )
    }
}