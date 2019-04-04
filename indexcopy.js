import { Navigation } from 'react-native-navigation';
import { registerScreens } from './App';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
          stack: {
            children: [{
              component: {
                name: 'get-liquored.AuthScreen',
                passProps: {
                  text: 'Login'
                }
              }
            }],
            options: {
              topBar: {
                title: {
                  text: 'Login'
                }
              }
            }
          }
        }
    });
});