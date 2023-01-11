import {Button, SafeAreaView} from 'react-native';
import React from 'react';
import {DrawerActions} from '@react-navigation/native';

const Home = ({navigation}: any) => {
  return (
    <SafeAreaView>
      <Button
        title="Profile Screen"
        onPress={() => navigation.navigate('Profile')}
      />
      <Button
        title="Open Drawer"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer)}
      />
      <Button
        title="Close Drawer"
        onPress={() => navigation.dispatch(DrawerActions.closeDrawer)}
      />
      <Button
        title="Toggle Drawer"
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
      />
    </SafeAreaView>
  );
};

export default Home;
