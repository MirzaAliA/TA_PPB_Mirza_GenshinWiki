import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import "react-native-gesture-handler";
import ArtifactsDetail from './pages/ArtifactsDetail';
import NationsDetail from './pages/NationsDetail'
import Navigation from "./pages/Navigation"
import Artifacts from './pages/Artifacts'
import Nations from './pages/Nations'
import ProfileScreen from './pages/ProfileScreen'
import Weapons from './pages/Weapons'
import WeaponsDetail from './pages/WeaponsDetail'


const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Genshin Impact Wiki" component={Navigation} options={{headerStyle: {backgroundColor: '#FFA000'}}}/>
                <Stack.Screen name="Artifacts" component={Artifacts} options={{headerStyle: {backgroundColor: '#FFA000'}}}/>
                <Stack.Screen name="Detail Artifacts" component={ArtifactsDetail} options={{headerStyle: {backgroundColor: '#FFA000'}}}/>
                <Stack.Screen name="Weapons" component={Weapons} options={{headerStyle: {backgroundColor: '#FFA000'}}}/>
                <Stack.Screen name="Detail Weapons" component={WeaponsDetail} options={{headerStyle: {backgroundColor: '#FFA000'}}}/>
                <Stack.Screen name="Nations" component={Nations} options={{headerStyle: {backgroundColor: '#FFA000'}}}/>
                <Stack.Screen name="Detail Nations" component={NationsDetail} options={{headerStyle: {backgroundColor: '#FFA000'}}}/>
                <Stack.Screen name="My Profile" component={ProfileScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;

