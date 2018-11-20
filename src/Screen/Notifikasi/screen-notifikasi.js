import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View,Text} from 'react-native'
function mapStateToProps(state) {
    return {};
}

class ScreenNotifikasi extends Component {
    render() {
        return (
            <View>
                <Text>Notifikasi</Text>
            </View>
        );
    }
}

export default connect(
    mapStateToProps,
)(ScreenNotifikasi);