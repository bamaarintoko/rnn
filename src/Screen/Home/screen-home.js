import React, {PureComponent} from 'react';
import {View, Text, ScrollView, Animated} from "react-native"
import {Navigation} from 'react-native-navigation'
import PropTypes from 'prop-types'
import {connect} from "react-redux";
import {Container, Content, Input, Item} from 'native-base'

// import {connect} from 'react-redux';


class ScreenHome extends PureComponent {
    // static options(passProps) {
    //     return {
    //         topBar: {
    //             rightButtons: [
    //                 {
    //                     id: 'buttonOne',
    //                     text: 'Home'
    //                 }
    //             ],
    //             leftButtons: [
    //                 {
    //                     id: 'buttonTwo',
    //                     icon: require('../../Assets/menu.png')
    //                 }
    //             ],
    //         },
    //     };
    // }

    static propTypes = {
        navigator: PropTypes.object,
        componentId: PropTypes.string
    };

    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(0)
        }
        this.pushViewPostScreen = this.pushViewPostScreen.bind(this);
        this._onScroll = this._onScroll.bind(this)
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
                        bottomTabs: {
                            visible: false
                        }

                    }
                }
            }
        )
    }

    componentDidMount() {
        console.log("===>", this.props.redData)
    }

    _onScroll(event) {
        // if (event.nativeEvent.contentOffset.y <=5){
        this.setState({
            fadeAnim: new Animated.Value(Math.round(event.nativeEvent.contentOffset.y) / 200)
        })
        // }
        // console.log(Math.round(event.nativeEvent.contentOffset.y)/100)
    }

    render() {
        return (
            <Container>


                <ScrollView onScroll={this._onScroll}>
                    <View style={{flex: 1, backgroundColor: 'black', height: 400}}>
                    </View>
                    <View style={{flex: 1, backgroundColor: 'blue', height: 400}}>
                    </View>
                    <View style={{flex: 1, backgroundColor: 'powderblue', height: 400}}>
                    </View>
                    <Text onPress={this.pushViewPostScreen}>Posts List Screen</Text>
                </ScrollView>
                <View>
                </View>

                <Animated.View style={{
                    height: 56,
                    width: '100%',
                    backgroundColor: '#FFF',
                    position: 'absolute',
                    opacity: this.state.fadeAnim,
                }}>
                </Animated.View>
                <View style={{flexDirection: 'row',position: 'absolute', padding: 7}}>
                    <View style={{flex:2}}>
                        <Item regular style={{backgroundColor: '#F5F5F5',position: 'absolute',height:40, width:'100%', borderRadius:3}}>
                            <Input placeholder='Regular Textbox'/>
                        </Item>
                    </View>
                    <View style={{flex:1}}>

                    </View>
                </View>


            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        redData: state.redData,
    };
}

export default connect(mapStateToProps)(ScreenHome);