import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import First from './src/screens/first';
import Second from './src/screens/second';

const BottomBar = createBottomTabNavigator()
const Stack = createNativeStackNavigator()



AppRegistry.registerComponent(appName, () => Second);
