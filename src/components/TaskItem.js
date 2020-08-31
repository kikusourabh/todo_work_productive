import React from 'react';
import {View, Text} from 'react-native';

export const TaskItem = ({item}) => {
  return (
    <View>
      <Text>{item.task_title}</Text>
      <Text>{item.task_description}</Text>
    </View>
  );
};
