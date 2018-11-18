import React, {Component} from 'react';
import {View, TouchableWithoutFeedback} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import {Container, Header, Content, Thumbnail, Text} from 'native-base';
import PropTypes from "prop-types";
import {Navigation} from 'react-native-navigation'

class Drawer extends Component {
    static propTypes = {
        navigator: PropTypes.object,
        componentId: PropTypes.string
    };

    constructor(props) {
        super(props);
        this.pushViewPostScreen = this.pushViewPostScreen.bind(this);
        Navigation.events().bindComponent(this);
    }

    pushViewPostScreen() {
        console.log("asdasdasd")
        Navigation.mergeOptions(this.props.componentId, {
            sideMenu: {
                left: {
                    visible: false
                }
            }
        });
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

        Navigation.push('stackRoot', {
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
                    }
                }
            }
        })
    }

    render() {
        return (
            <View style={{backgroundColor: '#212121', flex: 1}}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', height: 150}}>
                        <Thumbnail large
                                   source={{uri: 'https://i.pinimg.com/originals/2d/99/0b/2d990bba7f18263687db199e2401ceaf.jpg'}}/>
                    </View>
                </View>
                <TouchableWithoutFeedback onPress={()=>this.pushViewPostScreen()}>
                    <View style={{flexDirection: 'row', padding: 10}}>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Icon color={'#29B6F6'} size={20}
                                  name="bell"/>
                        </View>
                        <View style={{flex: 5}}><Text style={{color: '#BDBDBD'}}>Notifications</Text></View>
                    </View>
                </TouchableWithoutFeedback>
                <View style={{flexDirection: 'row', padding: 10}}>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Icon color={'#29B6F6'} size={20}
                              name="comments"/>
                    </View>
                    <View style={{flex: 5}}><Text style={{color: '#BDBDBD'}}>Messaging</Text></View>
                </View>
                <View style={{flexDirection: 'row', padding: 10}}>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Icon color={'#29B6F6'} size={20}
                              name="list-alt"/>
                    </View>
                    <View style={{flex: 5}}><Text style={{color: '#BDBDBD'}}>Adopsi List</Text></View>
                </View>
                <View style={{flexDirection: 'row', padding: 10}}>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Icon color={'#29B6F6'} size={20}
                              name="comments"/>
                    </View>
                    <View style={{flex: 5}}><Text style={{color: '#BDBDBD'}}>Adopted Animals</Text></View>
                </View>
            </View>
        );
    }
}

export default (Drawer);