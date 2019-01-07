import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions";
import SettingsComponent from "../components/SettingsComponent";

class SettingsContainer extends Component {
    render(){
        return(
            <SettingsComponent {...this.props} />
        )
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ ...actions }, dispatch);
};
const mapStateToProps = store => {
    return {
        settings: store.settings
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SettingsContainer);