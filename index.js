import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const BottomBar = createBottomTabNavigator()
const Stack = createNativeStackNavigator()



AppRegistry.registerComponent(appName, () => App);
