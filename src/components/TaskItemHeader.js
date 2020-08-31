import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Styles} from '../config/Styles';
import {Colors} from '../config/Colors';

export const TaskItemHeader = ({section}) => {
  return (
    <View style={styles.HeaderContainer}>
      <Text style={[Styles.HeaderText, styles.HeaderText]}>
        {section.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderContainer: {
    backgroundColor: Colors.white,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  HeaderText: {position: 'absolute', alignSelf: 'flex-start'},
});
