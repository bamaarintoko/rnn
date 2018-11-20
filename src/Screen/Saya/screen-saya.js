import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native'
function mapStateToProps(state) {
    return {};
}

class ScreenSaya extends Component {
    render() {
        return (
            <View>
                <Text>Screen Saya</Text>
            </View>
        );
    }
}

export default connect(
    mapStateToProps,
)(ScreenSaya);