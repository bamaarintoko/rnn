import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native'
function mapStateToProps(state) {
    return {};
}

class ScreenMall extends Component {
    render() {
        return (
            <View>
                <Text>Mall</Text>
            </View>
        );
    }
}

export default connect(
    mapStateToProps,
)(ScreenMall);