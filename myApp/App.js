import { SafeAreaView } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { Header, createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import Login from './Screens/login';
import Register from './Screens/register';
import Genres from './Screens/genres';
import Index from './Screens/index';
import Profile from './Screens/profile';
import Privacy from './Screens/privacy';
import Home from './Screens/home';
import EditProfile from './Screens/editProfile';
import FAQ from './Screens/faq';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Nav = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Nav.Navigator
        initialRouteName="Index"
        activeColor="#e91e63"
        labelStyle={{ fontSize: 12 }}
        style={{ backgroundColor: 'tomato' }}
      >
        <Nav.Screen
          name="Profile"
          component={Profile}
        />
        <Nav.Screen
          name="Home"
          component={Home}
        />
        <Nav.Screen
          name="Genres"
          component={Genres}
        />
        <Nav.Screen
          name="Index"
          component={Index}
        />
        <Nav.Screen
          name="EditProfile"
          component={EditProfile}
        />
        <Nav.Screen
          name="Login"
          component={Login}
        />
        <Nav.Screen
          name="Register"
          component={Register}
        />
        <Nav.Screen
          name='Privacy'
          component={Privacy}
        />
        <Nav.Screen
          name="FAQ"
          component={FAQ}
        />
      </Nav.Navigator>
    </NavigationContainer>
  )
}
