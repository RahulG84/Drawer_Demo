import {Button, SafeAreaView} from 'react-native';
import React from 'react';

const Setting = ({navigation}: any) => {
  return (
    <SafeAreaView>
      <Button title="Home Screen" onPress={() => navigation.navigate('Home')} />
    </SafeAreaView>
  );
};

export default Setting;
