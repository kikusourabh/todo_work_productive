import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Styles} from '../config/Styles';
import CheckBox from '@react-native-community/checkbox';
import {useDispatch} from 'react-redux';
import {
  completeTask,
  inCompleteTask,
  deleteTask,
} from '../store/Actions/TaskAction';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../config/Colors';

export default function TaskItem({item}) {
  const dispatch = useDispatch();

  const setTaskState = (state) => {
    if (state) {
      dispatch(completeTask(item.id));
    } else {
      dispatch(inCompleteTask(item.id));
    }
  };

  const delete_Task = () => {
    dispatch(deleteTask(item.id));
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        marginStart: 4,
        marginBottom: 4,
        marginTop: 4,
      }}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <CheckBox
          disabled={false}
          value={item.task_status}
          style={styles.checkBoxStyle}
          onValueChange={(newValue) => setTaskState(newValue)}
        />
      </View>
      <View style={{flex: 10}}>
        <Text style={Styles.SubHeaderText}>{item.task_title}</Text>
        <Text style={Styles.ContentText}>{item.task_description}</Text>
      </View>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <TouchableOpacity onPress={delete_Task}>
          <Icon name="delete" size={25} color={Colors.accent} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  checkBoxStyle: {height: 25, width: 25},
});
