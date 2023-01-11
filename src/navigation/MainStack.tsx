import {} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screen/Home';
import Setting from '../screen/Setting';
import Profile from '../screen/Profile';
import DrawerConatiner from './DrawerConatiner';
import Calender from '../screen/Calender';
const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="DrawerConatiner" component={DrawerConatiner} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Calender" component={Calender} />
    </Stack.Navigator>
  );
};

export default MainStack;
