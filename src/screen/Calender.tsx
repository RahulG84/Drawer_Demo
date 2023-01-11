import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  ImageBackground,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Calendar} from 'react-native-calendars';
import ScheduleConatiner from '../components/ScheduleConatiner';
import {data} from './DummyScheduleData';

const Calender = () => {
  return (
    <ImageBackground
      source={require('../assests/Image/bgplain.png')}
      style={{flex: 1}}>
      <ScrollView>
        <SafeAreaView>
          <Calendar
            onDayPress={day => {
              console.log(day.dateString);
            }}
            style={styles.calenderContainerStyle}
            theme={{
              calendarBackground: 'transparent',
              arrowColor: 'white',
              monthTextColor: 'white',
              textDisabledColor: 'black',
              dayTextColor: 'white',
              textDayFontSize: 14,
              textMonthFontSize: 16,
              textDayHeaderFontSize: 10,
            }}
          />

          <View style={styles.scheduleConatinerStyle}>
            <Text style={styles.scheduleTextStyle}>Schedule:</Text>
            <View style={styles.scheduleBottomBorderStyle}>{}</View>
            <FlatList
              data={data}
              renderItem={({item}) => (
                <ScheduleConatiner
                  selectedDate={item.dataLabel}
                  selectedStartTime={item.pickUpTimeStart}
                  selectedEndTime={item.pickUptimeEnd}
                  carServiceName={item.serviceType}
                  representativeName={item.representativeName}
                />
              )}
            />
          </View>
        </SafeAreaView>
      </ScrollView>
    </ImageBackground>
  );
};

export default Calender;

const styles = StyleSheet.create({
  calenderContainerStyle: {
    width: 300,
    height: 355,
    alignSelf: 'center',
    borderColor: '#F1F1F1',
    borderWidth: 1,
    marginTop: 20,
  },
  scheduleConatinerStyle: {
    marginTop: 24,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white',
  },
  scheduleTextStyle: {
    fontSize: 24,
    color: 'white',
    marginLeft: 10,
    justifyContent: 'center',
    margin: 14,
  },
  scheduleBottomBorderStyle: {borderTopWidth: 1, borderColor: 'white'},
});
