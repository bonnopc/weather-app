import React, { Component } from "react";
import HomeComponent from "../components/HomeComponent";

export default class HomeContainer extends Component {
    render(){
        return(
            <HomeComponent {...this.props} />
        )
    }
}