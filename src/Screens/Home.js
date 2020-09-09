import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Modal,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';

//components
import TaskItem from '../components/TaskItem';
import {useSelector, useDispatch} from 'react-redux';
import {Styles} from '../config/Styles';
import FloatingActionButton from '../components/FloatingActionButton';
import {addTask, completeTask} from '../store/Actions/TaskAction';
import {Colors} from '../config/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

function Home() {
  const [Task, setTask] = useState({
    title: 'null',
    description: 'null',
  });
  const [modelVisibility, setModelVisibility] = useState(false);

  const Tasks = useSelector((state) => state.tasksController.Tasks);

  const inCompleteTasks = Tasks.filter((val) => val.task_status == false);

  const completeTasks = Tasks.filter((val) => val.task_status == true);

  const dispatch = useDispatch();

  const add_Task = (task) => {
    setModelVisibility(false);
    dispatch(addTask(task));
    setTask({
      title: 'null',
      description: 'null',
    });
  };

  const OpenModal = () => {
    setModelVisibility(true);
  };
  const checkTask = () => {
    if (
      Task.title != null &&
      Task.title != 'null' &&
      Task.description != null &&
      Task.description != 'null'
    ) {
      const id = create_UUID();
      console.log('id : ' + id);

      add_Task({
        id: id,
        task_title: Task.title,
        task_description: Task.description,
        task_status: false,
      });
    } else {
      console.log('====================================');
      console.log('wrong details entered');
      console.log('====================================');
    }
  };

  const create_UUID = () => {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
      },
    );
    return uuid;
  };

  const checkTaskTitle = (title) => {
    if (/^.{4,30}.$/.test(title)) {
      setTask({
        ...Task,
        title: title,
      });
    } else {
      setTask({
        ...Task,
        title: null,
      });
    }
  };
  const checkTaskDiscription = (description) => {
    if (/^.{4,120}.$/.test(description)) {
      setTask({
        ...Task,
        description: description,
      });
    } else {
      setTask({
        ...Task,
        description: null,
      });
    }
  };

  const onClose = () => {
    setModelVisibility(false);
  };

  const renderItem = ({item}) => <TaskItem item={item} />;

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* modal */}
      <Modal animationType="fade" transparent={true} visible={modelVisibility}>
        <View style={styles.parentView}>
          <View style={styles.modalCard}>
            <View style={styles.cardHeader}>
              <View
                style={{
                  flex: 10,
                  flexDirection: 'row',
                }}>
                <Icon
                  style={{justifyContent: 'center', alignSelf: 'center'}}
                  name="add-circle-outline"
                  size={24}
                  color={Colors.white}
                />
                <TextInput
                  style={[styles.headerInput, {paddingStart: 8}]}
                  placeholder="Title"
                  color={Colors.white}
                  onChangeText={(e) => checkTaskTitle(e)}
                  placeholderTextColor={Colors.white}
                />
              </View>

              <View style={{flex: 1}}>
                <TouchableOpacity onPress={onClose}>
                  <Icon
                    name="close"
                    size={24}
                    color={Colors.white}
                    style={{alignSelf: 'flex-end'}}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {Task.title == null ? (
              <View
                style={{
                  marginStart: 16,
                  marginEnd: 16,
                  backgroundColor: Colors.white,
                  borderRadius: 10,
                  padding: 8,
                }}>
                <Text
                  style={{
                    color: Colors.error,
                  }}>
                  Title must be minimum 4 and maximum 30 character
                </Text>
              </View>
            ) : null}
            <View style={styles.cardBody}>
              <TextInput
                multiline
                style={[styles.headerInput, {width: '100%', fontSize: 16}]}
                numberOfLines={4}
                placeholder="Discription"
                color={Colors.white}
                onChangeText={(e) => checkTaskDiscription(e)}
                placeholderTextColor={Colors.white}
              />
            </View>
            {Task.description == null ? (
              <View
                style={{
                  marginStart: 16,
                  marginEnd: 16,
                  backgroundColor: Colors.white,
                  borderRadius: 10,
                  marginTop: 8,
                  padding: 8,
                }}>
                <Text
                  style={{
                    color: Colors.error,
                  }}>
                  Discription must be minimum 4 and maximum 120 character
                </Text>
              </View>
            ) : null}
            <TouchableOpacity onPress={checkTask}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Add</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* modal */}

      <View style={{flex: 1, padding: 16}}>
        {/* incomplete */}
        <View>
          <Text style={Styles.HeaderText}>Todo</Text>
        </View>
        {inCompleteTasks.length > 0 ? (
          <View>
            <Text>Task incomplete : {inCompleteTasks.length} </Text>
          </View>
        ) : (
          <Text>You don't have any task to do</Text>
        )}
        <FlatList
          data={inCompleteTasks}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
        {/* incomplete */}

        {/* complete */}
        <View>
          <Text style={Styles.HeaderText}>Complete</Text>
        </View>
        {completeTasks.length > 0 ? (
          <Text>Task complete : {completeTasks.length} </Text>
        ) : (
          <Text>You don't have any completed task</Text>
        )}
        <FlatList
          data={completeTasks}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
        {/* complete */}
        <FloatingActionButton onPress={OpenModal} />
      </View>
    </SafeAreaView>
  );
}

export default Home;

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 150,
    marginTop: 16,
    marginBottom: 16,
    backgroundColor: Colors.white,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: Colors.accent,
  },
  cardHeader: {
    height: 56,
    alignItems: 'center',
    flexDirection: 'row',
    paddingStart: 16,
    paddingEnd: 16,
  },
  cardBody: {
    height: 100,
    borderWidth: 1,
    marginTop: 8,
    flexDirection: 'column',
    marginStart: 16,
    marginEnd: 16,
    borderRadius: 10,
    padding: 8,
    borderColor: Colors.white,
    borderStyle: 'dashed',
  },
  headerInput: {
    width: '75%',
    fontSize: 20,
  },
  modalCard: {
    width: '70%',

    borderRadius: 10,
    backgroundColor: Colors.accent,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  parentView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
