
import { createStackNavigator } from 'react-navigation';
import LoginScreen from '../containers/login-screen/login-screen';
import HomeScreen from '../containers/home-screen/home-screen';
import SignUpScreen from '../containers/sign-up-screen/sign-up-screen';

const AppStack = createStackNavigator({
  Home: HomeScreen,
  Login: LoginScreen,
  SignUp: SignUpScreen
},
{
  initialRouteName: 'Login',
});

export default AppStack;