import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppRegistry } from 'react-native';
import Login from './src/screens/App';
import App from './src/screens/App';
import { name as appName } from './app.json';
import Home from './src/screens/Home';
import Page from './src/screens/Page';
import Splash from './src/screens/Splash';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Bottom from './src/components/BottomBar';

const BottomBar = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

function BottomBarApp() {
    return (
        <BottomBar.Navigator tabBar={(props) => <Bottom {...props} />}>
            <BottomBar.Screen options={{
            }} name="Home" component={Home} />

        </BottomBar.Navigator>
    )
}

function StackApp() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{
                    headerShown: false,
                    gestureEnabled: false
                }} name="Splash" component={Splash} />

                <Stack.Screen options={{
                    headerShown: false,
                    gestureEnabled: false
                }} name="Login" component={Login} />

                <Stack.Screen options={{
                    headerShown: false,
                    gestureEnabled: false
                }} name="Home" component={BottomBarApp} />

                <Stack.Screen options={{
                    headerShown: false,
                    gestureEnabled: false
                }} name="Page" component={Page} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

AppRegistry.registerComponent(appName, () => StackApp);
