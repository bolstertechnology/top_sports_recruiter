import {createAppContainer,withNavigation} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from '../screens/Auth/SignIn';
import Signup from '../screens/Auth/SignUp';
import Home from './TabNavigation';

const AppNavigator = createStackNavigator(
  {
    LoginScreen: {screen: Login},
    SignupScreen: {screen: Signup},
    HomeScreen:{screen:Home},
  },
  {
    initialRouteName: 'HomeScreen',
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);

export default createAppContainer(withNavigation(AppNavigator));