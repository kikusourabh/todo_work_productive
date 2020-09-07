import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  FlatList,
} from 'react-native';

//components
import {TaskItem} from '../components/TaskItem';
import {TaskItemHeader} from '../components/TaskItemHeader';
import {useSelector, useDispatch} from 'react-redux';
import {Styles} from '../config/Styles';
import FloatingActionButton from '../components/FloatingActionButton';
import {addTask} from '../store/Actions/TaskAction';
import {Colors} from '../config/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

function Home() {
  const [Task, setTask] = useState({
    title: 'null',
    description: 'null',
  });
  const [modelVisibility, setModelVisibility] = useState(false);

  const inCompleteTasks = useSelector(
    (state) => state.tasksController.incomeplete_task,
  );
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
      add_Task({
        id: 'task-' + Math.random(),
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

  const checkTaskTitle = (title) => {
    if (/^.{4,15}.$/.test(title)) {
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
    if (/^.{4,60}.$/.test(description)) {
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

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* modal */}
      <Modal animationType="fade" transparent={true} visible={modelVisibility}>
        <View style={styles.parentView}>
          <View style={styles.modalCard}>
            <View style={styles.cardHeader}>
              <View style={{flex: 10, flexDirection: 'row'}}>
                <Icon
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
                  Title must be minimum 4 and maximum 15 character
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
                  Discription must be minimum 4 and maximum 60 character
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

      <View>
        <Text style={Styles.HeaderText}>Task todo</Text>
      </View>
      {inCompleteTasks.length > 0 ? (
        <Text>Task incomplete : {inCompleteTasks.length} </Text>
      ) : (
        <Text>You don't have any task to do</Text>
      )}
      <FlatList
        data={inCompleteTasks}
        renderItem={TaskItem}
        keyExtractor={(item) => item.id}
      />

      <FloatingActionButton onPress={OpenModal} />
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
