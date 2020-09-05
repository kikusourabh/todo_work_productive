import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../config/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

function FloatingActionButton({onPress, style}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.floatingButton, style]}>
          <Icon name="add" size={30} color={Colors.white} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default FloatingActionButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 16,
    alignItems: 'flex-end',
    marginEnd: 16,
  },
  floatingButton: {
    height: 56,
    width: 56,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    backgroundColor: Colors.accent,
    borderRadius: 56 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
