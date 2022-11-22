import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Name from './src/screens/Name';
import About from './src/screens/About';

const BottomBar = createBottomTabNavigator()
const Stack = createNativeStackNavigator()



AppRegistry.registerComponent(appName, () => App);
