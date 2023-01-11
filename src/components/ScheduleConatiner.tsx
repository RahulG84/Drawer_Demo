import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {IProps} from './ScheduleConatinerInterface';

const ScheduleConatiner = ({
  selectedDate,
  selectedStartTime,
  selectedEndTime,
  carServiceName,
  representativeName,
}: IProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.scheduleConatinerStyle,
        !selectedDate ? styles.bottomScheduleItemBorderStyle : null,
      ]}>
      <Text
        style={[
          styles.dayTextStyle,
          !selectedDate ? styles.bottomDayTextStyle : null,
        ]}>
        {selectedDate}
      </Text>
      <View style={styles.scheduleItemsConatinerStyle}>
        <Text style={styles.selectedTimeTextStyle}>{selectedStartTime}</Text>
        {/* Dot Circle Name */}
        <View style={styles.scheduleview}>{}</View>
        <Text style={styles.carServiceTextStyle}>{carServiceName}</Text>
      </View>
      <View style={styles.scheduleItemsConatinerStyle}>
        <Text style={styles.selectedTimeTextStyle}>{selectedEndTime}</Text>
        <Text style={styles.representativeTextStyle}>{representativeName}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ScheduleConatiner;

const styles = StyleSheet.create({
  scheduleConatinerStyle: {
    borderColor: 'white',
    borderBottomWidth: 1,
    backgroundColor: 'rgba(228, 228, 228, 0.15)',
  },
  bottomScheduleItemBorderStyle: {
    borderBottomWidth: 0,
  },
  dayTextStyle: {
    alignItems: 'center',
    marginLeft: 10,
    fontSize: 20,
    color: 'white',
    marginTop: 10,
    marginBottom: 15,
  },
  bottomDayTextStyle: {
    marginTop: -20,
  },
  scheduleItemsConatinerStyle: {flexDirection: 'row', marginBottom: 10},
  selectedTimeTextStyle: {
    alignItems: 'center',
    marginLeft: 10,
    fontSize: 14,
    color: 'white',
  },
  scheduleview: {
    width: 6,
    height: 6,
    backgroundColor: 'white',
    borderRadius: 3,
    alignSelf: 'center',
    marginLeft: 20,
  },
  carServiceTextStyle: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  representativeTextStyle: {
    marginLeft: 30,
    fontSize: 14,
    color: 'white',
  },
});
