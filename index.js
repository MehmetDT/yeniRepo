import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Name from './src/screens/Name';
import About from './src/screens/About';
import AboutSecond from "./src/screens/AboutSecond"
import Splash from "./src/screens/Splash"
import Nearby from "./src/screens/Nearby"

const BottomBar = createBottomTabNavigator()
const Stack = createNativeStackNavigator()



AppRegistry.registerComponent(appName, () => Nearby);
