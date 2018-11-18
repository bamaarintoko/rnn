import React, {Component} from 'react';
// import {connect} from 'react-redux';
import {Navigation} from 'react-native-navigation'
import {View, Text} from "react-native"
function mapStateToProps(state) {
    return {};
}

class ScreenAdd extends Component {
    componentDidMount() {
        console.log("==>",this.props)
    }

    render() {
        return (
            <Navigation.Element elementId='image2'>
                <Text>Addddd</Text>
            </Navigation.Element>
        );
    }
}

export default (ScreenAdd);