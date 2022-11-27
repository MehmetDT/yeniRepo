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
import Bottom from './src/components/BottomBar';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottomNavigation() {
    return (
        <Tab.Navigator tabBar={(props) => <Bottom {...props} />}>

            <Tab.Screen options={{
                headerShown: false,
                tabBarVisible: false,
            }} name="Nearby" component={Nearby} />

            <Tab.Screen options={{
                headerShown: false,
                tabBarVisible: false,
            }} name="Favorites" component={Favorites} />

            <Tab.Screen options={{
                headerShown: false,
                tabBarVisible: false,
            }} name="Message" component={Message} />

            <Tab.Screen options={{
                headerShown: false,
                tabBarVisible: false,
            }} name="Profile" component={Profile} />

        </Tab.Navigator>
    );
}



function StackApp() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{
                    animationEnabled: true,
                    animationTypeForReplace: 'pop',
                    headerBackTitleVisible: false,
                    gestureEnabled: false,
                    headerShown: false

                }} name='Splash' component={Splash} />

                <Stack.Screen options={{
                    animationEnabled: true,
                    animationTypeForReplace: 'pop',
                    headerBackTitleVisible: false,
                    gestureEnabled: false,
                    headerShown: false

                }} name='Name' component={Name} />

                <Stack.Screen options={{
                    animationEnabled: true,
                    animationTypeForReplace: 'pop',
                    headerBackTitleVisible: false,
                    gestureEnabled: false,
                    headerShown: false

                }} name='About' component={About} />

                <Stack.Screen options={{
                    animationEnabled: true,
                    animationTypeForReplace: 'pop',
                    headerBackTitleVisible: false,
                    gestureEnabled: false,
                    headerShown: false

                }} name='AboutSecond' component={AboutSecond} />

                <Stack.Screen options={{
                    animationEnabled: true,
                    animationTypeForReplace: 'pop',
                    headerBackTitleVisible: false,
                    gestureEnabled: false,
                    headerShown: false
                }} name='Nearby' component={BottomNavigation} />


            </Stack.Navigator>
        </NavigationContainer>
    )
}


AppRegistry.registerComponent(appName, () => StackApp);
