import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainNavigator from './MainNavigator';
import AuthNavigator from './AuthNavigator';

export default createAppContainer(createSwitchNavigator(
    {
        Auth: AuthNavigator,
        Main: MainNavigator
    },
    {
        initialRouteName: 'Auth'  
    }
));