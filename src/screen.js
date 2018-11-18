import {Navigation} from 'react-native-navigation'
import ScreenHome from './Screen/Home/screen-home'
import ScreenAdd from './Screen/Home/screen-add'
export function registerScreen(store, Provider) {
    Navigation.registerComponent('home.List',()=>require('./Screen/Home/screen-home').default);
    Navigation.registerComponent('home.add',()=>require('./Screen/Home/screen-add').default);
    Navigation.registerComponent('comp.drawer',()=>require('./Component/Drawer').default);
}