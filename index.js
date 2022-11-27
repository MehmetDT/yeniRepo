import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Name from './src/screens/Name';
import About from './src/screens/About';
import AboutSecond from "./src/screens/AboutSecond"
import Favorites from "./src/screens/Favorites"
import ProfilesCmp from './src/components/ProfilesCmp';
import Splash from "./src/screens/Splash"
import Dropdown from "./src/screens/Dropdown"
import Profile from "./src/screens/Profile"
import Nearby from './src/screens/Nearby';
import UserProfile from './src/screens/UserProfile';
import Message from "./src/screens/Message"
import BottomBarAppp from './src/screens/BottomBarAppp';

const BottomBar = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

function BottomBarApp() {
    return (
        <BottomBar.Navigator tabBar={(props) => <Bottom {...props} />}>
            <BottomBar.Screen name='Nearby' component={Nearby} />
            <BottomBar.Screen name='Favorites' component={Favorites} />
            <BottomBar.Screen name='Message' component={Message} />
            <BottomBar.Screen name='Profile' component={Profile} />
        </BottomBar.Navigator>


    )
}

function StackApp() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{
                    headerShown: false
                }} name='Splash' component={Splash} />
                <Stack.Screen options={{
                    headerShown: false
                }} name='Home' component={BottomBarApp} />

                <Stack.Screen options={{
                    headerShown: false
                }} name='Message' component={Message} />

                <Stack.Screen options={{
                    headerShown: false
                }} name='Favorites' component={Favorites} />

                <Stack.Screen options={{
                    headerShown: false
                }} name='Profile' component={Profile} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}


AppRegistry.registerComponent(appName, () => Message);
