import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native'
function mapStateToProps(state) {
    return {};
}

class ScreenTimeline extends Component {
    render() {
        return (
            <View>
                <Text>
                    Timeline
                </Text>

            </View>
        );
    }
}

export default connect(
    mapStateToProps,
)(ScreenTimeline);