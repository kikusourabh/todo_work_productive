import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Styles} from '../config/Styles';
import CheckBox from '@react-native-community/checkbox';

export const TaskItem = ({item}) => {
  return (
    <View style={{flexDirection: 'row', marginBottom: 4, marginTop: 4}}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <CheckBox
          disabled={false}
          value={item.task_status}
          style={styles.checkBoxStyle}
        />
      </View>
      <View style={{flex: 10}}>
        <Text style={Styles.SubHeaderText}>{item.task_title}</Text>
        <Text style={Styles.ContentText}>{item.task_description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  checkBoxStyle: {height: 25, width: 25},
});
