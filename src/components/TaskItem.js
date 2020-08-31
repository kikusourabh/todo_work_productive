import React from 'react';
import {View, Text} from 'react-native';
import {Styles} from '../config/Styles';

export const TaskItem = ({item}) => {
  return (
    <View style={{marginStart: 16, marginBottom: 4, marginTop: 4}}>
      <Text style={Styles.SubHeaderText}>{item.task_title}</Text>
      <Text style={Styles.ContentText}>{item.task_description}</Text>
    </View>
  );
};
