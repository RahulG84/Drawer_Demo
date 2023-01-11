import {} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screen/Home';
import Profile from '../screen/Profile';
import Setting from '../screen/Setting';
import Calender from '../screen/Calender';

const Drawer = createDrawerNavigator();

const DrawerConatiner = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false, drawerPosition: 'right'}}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Setting" component={Setting} />
      <Drawer.Screen name="Calender" component={Calender} />
    </Drawer.Navigator>
  );
};

export default DrawerConatiner;
