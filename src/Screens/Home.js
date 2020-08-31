import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';

function Home() {
  const [task, setTask] = useState([
    {
      id: 'task1',
      task_title: 'learn react-native basics',
      task_description:
        'learn and implement diffrent small example to create react native basic apps',
    },
    {
      id: 'task1',
      task_title: 'learn react-native basics',
      task_description:
        'learn and implement diffrent small example to create react native basic apps',
    },
    {
      id: 'task1',
      task_title: 'learn react-native basics',
      task_description:
        'learn and implement diffrent small example to create react native basic apps',
    },
  ]);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View></View>
    </SafeAreaView>
  );
}

export default Home;
