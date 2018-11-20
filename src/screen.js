import {Navigation} from 'react-native-navigation'
import ScreenHome from './Screen/Home/screen-home'
import ScreenAdd from './Screen/Home/screen-add'
import Drawer from './Component/Drawer'
export function registerScreen(Provider, store) {
    Navigation.registerComponentWithRedux('screen.home',()=>require('./Screen/Home/screen-home').default,Provider, store);
    Navigation.registerComponentWithRedux('home.add',()=>require('./Screen/Home/screen-add').default,Provider, store);
    Navigation.registerComponentWithRedux('screen.timeline',()=>require('./Screen/Timeline/screen-timeline').default,Provider, store);
    Navigation.registerComponentWithRedux('screen.mall',()=>require('./Screen/Mall/screen-mall').default,Provider, store);
    Navigation.registerComponentWithRedux('screen.notifikasi',()=>require('./Screen/Notifikasi/screen-notifikasi').default,Provider, store);
    Navigation.registerComponentWithRedux('screen.saya',()=>require('./Screen/Saya/screen-saya').default,Provider, store);
    Navigation.registerComponentWithRedux('comp.drawer',()=>require('./Component/Drawer').default,Provider, store);
}