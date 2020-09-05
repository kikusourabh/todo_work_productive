import React, {useState} from 'react';
import {View, Text, SafeAreaView, SectionList} from 'react-native';

//components
import {TaskItem} from '../components/TaskItem';
import {TaskItemHeader} from '../components/TaskItemHeader';
import {useSelector, useDispatch} from 'react-redux';
import {Styles} from '../config/Styles';
import FloatingActionButton from '../components/FloatingActionButton';
import {addTask} from '../store/Actions/TaskAction';

function Home() {
  const inCompleteTasks = useSelector(
    (state) => state.tasksController.incomeplete_task,
  );
  const dispatch = useDispatch();
  const add_Task = () => {
    dispatch(
      addTask({
        id: 'task-1',
        task_title: 'learn about git and github',
        task_description:
          'learnig about git basic commands, branches, merging, conflicts',
        task_status: false,
      }),
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <Text style={Styles.HeaderText}>Task todo</Text>
      </View>
      {inCompleteTasks.length > 0 ? (
        <Text>Task incomplete : {inCompleteTasks.length} </Text>
      ) : (
        <Text>You don't have any task to do</Text>
      )}
      {/* <SectionList
        style={{paddingStart: 16, paddingEnd: 16}}
        sections={task}
        renderItem={TaskItem}
        renderSectionHeader={TaskItemHeader}
      /> */}
      <FloatingActionButton onPress={add_Task} />
    </SafeAreaView>
  );
}

export default Home;
