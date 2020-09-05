import React, {useState} from 'react';
import {View, Text, SafeAreaView, SectionList} from 'react-native';

//components
import {TaskItem} from '../components/TaskItem';
import {TaskItemHeader} from '../components/TaskItemHeader';
import {useSelector} from 'react-redux';
import {Styles} from '../config/Styles';
import FloatingActionButton from '../components/FloatingActionButton';

function Home() {
  const inCompleteTasks = useSelector(
    (state) => state.tasksController.incomeplete_task,
  );
  const addTask = () => {};
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
      <FloatingActionButton onPress={addTask} />
    </SafeAreaView>
  );
}

export default Home;
