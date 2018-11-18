import {AppRegistry} from 'react-native';
import {Navigation} from "react-native-navigation";
import App from './App';
import {registerScreen} from './src/screen'

registerScreen();
Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => App);

// AppRegistry.registerComponent('TestingRNNDua', () => App);
Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setDefaultOptions({
        bottomTab: {
            iconColor: '#1B4C77',
            selectedIconColor: '#0f0',
            textColor: '#1B4C77',
            selectedTextColor: '#0f0',
            fontFamily: 'HelveticaNeue-Italic',
            fontSize: 13
        },
        _animations: {
            push: {
                waitForRender: false,
            }
        },
        animations: {
            setRoot: {
                alpha: {
                    from: 0,
                    to: 1,
                    duration: 300
                }
            },
            push: {
                topBar: {
                    id: 'stackRoot',
                    alpha: {
                        from: 0,
                        to: 1,
                        duration: 500,
                        interpolation: 'accelerate'
                    }
                },
                bottomTabs: {
                    y: {
                        from: 1000,
                        to: 0,
                        duration: 500,
                        interpolation: 'decelerate',
                    },
                    alpha: {
                        from: 0,
                        to: 1,
                        duration: 500,
                        interpolation: 'decelerate'
                    }
                },
                _content: {
                    y: {
                        from: 1000,
                        to: 0,
                        duration: 500,
                        interpolation: 'accelerate',
                    },
                    alpha: {
                        from: 0,
                        to: 1,
                        duration: 500,
                        interpolation: 'accelerate'
                    }
                },
                content: {
                    x: {
                        from: 1000,
                        to: 0,
                        duration: 300,
                    },
                    alpha: {
                        from: 0.5,
                        to: 1,
                        duration: 300,
                    }
                }
            },
            pop: {
                topBar: {
                    id: 'stackRoot',
                    alpha: {
                        from: 1,
                        to: 0,
                        duration: 500,
                        interpolation: 'accelerate'
                    }
                },
                bottomTabs: {
                    y: {
                        from: 0,
                        to: 100,
                        duration: 500,
                        interpolation: 'decelerate',
                    },
                    alpha: {
                        from: 1,
                        to: 0,
                        duration: 500,
                        interpolation: 'decelerate'
                    }
                },
                content: {
                    x: {
                        from: 0,
                        to: -1000,
                        duration: 300,
                    },
                    alpha: {
                        from: 0.5,
                        to: 1,
                        duration: 300,
                    }
                }
            }
        }
    });
    Navigation.setRoot({
        root: {
            sideMenu: {
                left: {
                    id: 'SideMenu',
                    component: {
                        id: 'SideMenu.left',
                        name: 'comp.drawer',
                    }

                },
                center: {
                    stack: {
                        id: 'stackRoot',
                        children: [
                            {
                                component: {
                                    name: 'home.List',
                                    options: {
                                        topBar: {
                                            title: {
                                                text: 'Home'
                                            }
                                        }
                                    }
                                }
                            }
                        ]
                    }
                },
            },

            // component: {
            //     name: "navigation.playground.WelcomeScreen"
            // }
        }
    });
});