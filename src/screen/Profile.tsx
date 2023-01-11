import {Button, SafeAreaView} from 'react-native';
import React from 'react';

const Profile = ({navigation}: any) => {
  return (
    <SafeAreaView>
      <Button
        title="Setting Screen"
        onPress={() => navigation.navigate('Calender')}
      />
    </SafeAreaView>
  );
};

export default Profile;
