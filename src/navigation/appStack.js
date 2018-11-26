
import { createStackNavigator } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';

const AppStack = createStackNavigator({
  Home: HomeScreen,
  Login: LoginScreen,
  SignUp: SignUpScreen
},
{
  initialRouteName: 'Login',
});

export default AppStack;
