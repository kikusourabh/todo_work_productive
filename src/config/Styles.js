import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors} from './Colors';

export const Styles = StyleSheet.create({
  HeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.PrimaryText,
  },
  SubHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.SecondaryText,
  },
  ContentText: {
    fontSize: 16,
    color: Colors.SecondaryText,
  },
});
