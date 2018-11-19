import {AppRegistry} from 'react-native';
import {Navigation} from "react-native-navigation";
import App from './App';
import {registerScreen} from './src/screen'
import {Provider} from 'react-redux';
import {store} from './src/Store/configureStore'
console.ignoredYellowBox = ['Remote debugger'];
registerScreen(Provider, store);
// Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => App);
let someColor = "#FF9800";
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

                    bottomTabs: {
                        children: [
                            {
                                stack: {
                                    children: [
                                        {
                                            component: {
                                                name: 'home.List',
                                                options: {
                                                    bottomTab: {
                                                        text: 'Beranda',
                                                        icon: require('./src/Assets/Icon/home.png'),
                                                        testID: 'something',
                                                        color: someColor,
                                                        selectedIcon: require('./src/Assets/Icon/multi-tab.png')
                                                    },
                                                    topBar: {
                                                        title: {
                                                            text: 'Home'
                                                        }
                                                    },

                                                },

                                            },
                                        },

                                    ]
                                }
                            },
                            {
                                stack: {
                                    children: [
                                        {
                                            component: {
                                                name: 'home.List',
                                                options: {
                                                    bottomTab: {
                                                        text: 'Timeline',
                                                        icon: require('./src/Assets/Icon/multi-tab.png'),
                                                        testID: 'something',
                                                    },
                                                    topBar: {
                                                        title: {
                                                            text: 'Home'
                                                        }
                                                    }
                                                },
                                            },
                                        },

                                    ]
                                }
                            },

                            {
                                stack: {
                                    children: [
                                        {
                                            component: {
                                                name: 'home.List',
                                                options: {
                                                    bottomTab: {
                                                        text: 'Mall',
                                                        icon: require('./src/Assets/Icon/hand-bag.png'),
                                                        testID: 'something',
                                                    },
                                                    topBar: {
                                                        title: {
                                                            text: 'Home'
                                                        }
                                                    }
                                                },
                                            },
                                        },

                                    ]
                                }
                            },

                            {
                                stack: {
                                    children: [
                                        {
                                            component: {
                                                name: 'home.List',
                                                options: {
                                                    bottomTab: {
                                                        text: 'Notifikasi',
                                                        icon: require('./src/Assets/Icon/alarm.png'),
                                                        testID: 'something',
                                                    },
                                                    topBar: {
                                                        title: {
                                                            text: 'Home'
                                                        }
                                                    }
                                                },
                                            },
                                        },

                                    ]
                                }
                            },

                            {
                                stack: {
                                    children: [
                                        {
                                            component: {
                                                name: 'home.List',
                                                options: {
                                                    bottomTab: {
                                                        text: 'Notifikasi',
                                                        icon: require('./src/Assets/Icon/user.png'),
                                                        testID: 'something',
                                                    },
                                                    topBar: {
                                                        title: {
                                                            text: 'Home'
                                                        }
                                                    }
                                                },
                                            },
                                        },

                                    ]
                                }
                            }
                            // {
                            //     component: {
                            //         name: 'home.List',
                            //         options: {
                            //             bottomTab: {
                            //                 text: 'something',
                            //                 icon: require('./src/Assets/menu.png'),
                            //                 testID: 'something',
                            //             },
                            //             topBar: {
                            //                 title: {
                            //                     text: 'Home'
                            //                 }
                            //             }
                            //         },
                            //     },
                            // },
                            // {
                            //     component: {
                            //         name: 'home.add',
                            //         options: {
                            //             bottomTab: {
                            //                 text: 'something',
                            //                 icon: require('./src/Assets/menu.png'),
                            //                 testID: 'something',
                            //             },
                            //             topBar: {
                            //                 title: {
                            //                     text: 'Home'
                            //                 }
                            //             }
                            //         },
                            //     },
                            // },
                        ]


                    },
                    // stack: {
                    //     id: 'stackRoot',
                    //     children: [
                    //         {
                    //             component: {
                    //                 name: 'home.List',
                    //                 options: {
                    //                     topBar: {
                    //                         title: {
                    //                             text: 'Home'
                    //                         }
                    //                     }
                    //                 }
                    //             }
                    //         }
                    //     ]
                    // }
                },

            },


            // component: {
            //     name: "navigation.playground.WelcomeScreen"
            // }
        }
    });
});