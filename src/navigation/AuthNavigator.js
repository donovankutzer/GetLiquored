import { createStackNavigator } from 'react-navigation';

//import RegisterScreen from '../screens/Auth/RegisterScreen';
import LoginScreen from '../screens/Auth/LoginScreen';


const AuthNavigator = createStackNavigator(
    {
        Login: LoginScreen
    },
    {
        headerMode: 'none',
    }
);

export default AuthNavigator;
