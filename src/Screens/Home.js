import React, {useState} from 'react';
import {View, Text, SafeAreaView, SectionList} from 'react-native';

//components
import {TaskItem} from '../components/TaskItem';
import {TaskItemHeader} from '../components/TaskItemHeader';

function Home() {
  const [task, setTask] = useState([
    {
      key: 'InCompletTask',
      title: 'Todo Task',
      data: [
        {
          id: 'task-1',
          task_title: 'learn react-native basics',
          task_description:
            'learn and implement diffrent small example to create react native basic apps',
        },
        {
          id: 'task-3',
          task_title: 'learn react-native basics',
          task_description:
            'learn and implement diffrent small example to create react native basic apps',
        },
      ],
    },
    {
      key: 'CompletedTask',
      title: 'Completed Task',
      data: [
        {
          id: 'task-2',
          task_title: 'learn react-native basics',
          task_description:
            'learn and implement diffrent small example to create react native basic apps',
        },
        {
          id: 'task-4',
          task_title: 'learn react-native basics',
          task_description:
            'learn and implement diffrent small example to create react native basic apps',
        },
      ],
    },
  ]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <SectionList
        sections={task}
        renderItem={TaskItem}
        renderSectionHeader={TaskItemHeader}
      />
    </SafeAreaView>
  );
}

export default Home;
