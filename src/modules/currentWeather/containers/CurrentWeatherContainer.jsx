import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions";
import CurrentWeatherComponent from "../components/CurrentWeatherComponent";

class CurrentWeatherContainer extends Component {
    render(){
        return(
            <CurrentWeatherComponent {...this.props} />
        )
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ ...actions }, dispatch);
};
const mapStateToProps = store => {
    return store;
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CurrentWeatherContainer);