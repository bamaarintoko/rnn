import React, {PureComponent} from 'react';
import {View, Text} from "react-native"
import {Navigation} from 'react-native-navigation'
import PropTypes from 'prop-types'
import {connect} from "react-redux";

// import {connect} from 'react-redux';


class ScreenHome extends PureComponent {
    static options(passProps) {
        return {
            topBar: {
                rightButtons: [
                    {
                        id: 'buttonOne',
                        text: 'Home'
                    }
                ],
                leftButtons: [
                    {
                        id: 'buttonTwo',
                        icon: require('../../Assets/menu.png')
                    }
                ],
            }
        };
    }

    static propTypes = {
        navigator: PropTypes.object,
        componentId: PropTypes.string
    };

    constructor(props) {
        super(props);
        this.pushViewPostScreen = this.pushViewPostScreen.bind(this);
        Navigation.events().bindComponent(this);
        // this.props.navigator.navigationButtonPressed(this.navigationButtonPressed.bind(this))
    }

    onNavigatorEvent(event) {
        console.log(event)
    }

    navigationButtonPressed({buttonId}) {
        console.log("asd")
        Navigation.mergeOptions(this.props.componentId, {
            sideMenu: {
                left: {
                    visible: true
                }
            }
        });
        // will be called when "buttonOne" is clicked
    }

    pushViewPostScreen() {

        // Navigation.setStackRoot(this.props.componentId, {
        //     component: {
        //         name: 'home.add',
        //         passProps: {
        //             text: 'Root screen'
        //         },
        //         options: {
        //             animations: {
        //                 setStackRoot: {
        //                     enable: true
        //                 }
        //             }
        //         }
        //     }
        // });

        Navigation.push(this.props.componentId, {
                component: {
                    name: 'home.add',
                    passProps: {
                        text: 'Some props that we are passing'
                    },
                    options: {
                        topBar: {
                            title: {
                                text: 'ADD'
                            }
                        },
                        bottomTabs:{
                            visible:false
                        }

                    }
                }
            }
        )
    }

    componentDidMount() {
        console.log("===>", this.props.redData)
    }

    render() {
        return (
            <Navigation.Element elementId='image1'>
                <Text onPress={this.pushViewPostScreen}>Posts List Screen</Text>
            </Navigation.Element>
        );
    }
}

function mapStateToProps(state) {
    return {
        redData: state.redData,
    };
}

export default connect(mapStateToProps)(ScreenHome);