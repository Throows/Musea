import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/HomeScreen';
import MyMusicScreen from './screens/MyMusicScreen';
import ResearchScreen from './screens/ResearchScreen';

const homeName = 'Home';
const musicName = 'My Music';
const researchName = 'Research';

const Tab = createBottomTabNavigator();

function MainContainer(){

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let routeName = route.name;

                        if( routeName === homeName ){
                            iconName = focused ? 'play' : 'play-outline';
                        } else if (routeName === musicName) {
                            iconName = focused ? 'musical-notes' : 'musical-notes-outline';
                        }else if (routeName === researchName) {
                            iconName = focused ? 'search' : 'search-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={color}/>
                    },
                    headerShown: false,
                })}>

                <Tab.Screen name={researchName} component={ResearchScreen} />
                <Tab.Screen name={homeName} component={HomeScreen} />
                <Tab.Screen name={musicName} component={MyMusicScreen} />

            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default MainContainer;