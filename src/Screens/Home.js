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
  const [modelVisibility, setModelVisibility] = useState(false);

  const inCompleteTasks = useSelector(
    (state) => state.tasksController.incomeplete_task,
  );
  const dispatch = useDispatch();
  const add_Task = () => {
    // dispatch(
    //   addTask({
    //     id: 'task-1',
    //     task_title: 'learn about git and github',
    //     task_description:
    //       'learnig about git basic commands, branches, merging, conflicts',
    //     task_status: false,
    //   }),
    // );

    setModelVisibility(true);
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

            <View style={styles.cardBody}>
              <TextInput
                multiline
                style={[
                  styles.headerInput,
                  {width: '100%', fontSize: 16, margin: 4},
                ]}
                numberOfLines={4}
                placeholder="Discription"
                color={Colors.white}
                placeholderTextColor={Colors.white}
              />
            </View>

            <TouchableOpacity>
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
