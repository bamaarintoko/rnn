import {Navigation} from 'react-native-navigation'
import ScreenHome from './Screen/Home/screen-home'
import ScreenAdd from './Screen/Home/screen-add'
import Drawer from './Component/Drawer'
export function registerScreen(Provider, store) {
    Navigation.registerComponentWithRedux('home.List',()=>require('./Screen/Home/screen-home').default,Provider, store);
    Navigation.registerComponentWithRedux('home.add',()=>require('./Screen/Home/screen-add').default,Provider, store);
    Navigation.registerComponentWithRedux('comp.drawer',()=>require('./Component/Drawer').default,Provider, store);
}