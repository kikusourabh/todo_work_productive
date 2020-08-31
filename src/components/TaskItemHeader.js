import React from 'react';
import {View, Text} from 'react-native';

export const TaskItemHeader = ({section}) => {
  return (
    <View>
      <Text>{section.title}</Text>
    </View>
  );
};
