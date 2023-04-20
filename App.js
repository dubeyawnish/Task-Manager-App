import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const taskInputHandler = (inputTask) => {
    setTask(inputTask);

  }

  const addNewTask = () => {
    setTaskList((currentTaskList) =>
      [...currentTaskList, task]

    )
  }


  return (
    <View style={styles.mainContainer} >
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={taskInputHandler}
          style={styles.inputBox}
          placeholder='Enter the task  Details'
        />
        <Button onPress={addNewTask} title='Add Tasks' />
      </View>

      <View style={styles.taskListSection}>
        <Text style={styles.taskOverviewStyle}>Your Task!</Text>
        <ScrollView>
        {
          taskList.map((taskItem, index) => {
            return (

              <View key={index} style={styles.taskItemStyle}>
                <Text style={styles.taskItemTextStyle} > {index + 1}: {taskItem}</Text>
              </View>

            )
          })
        }
        </ScrollView>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 45,
    paddingHorizontal: 15,
    backgroundColor: '#f0ee95'

  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',

  },
  inputBox: {
    width: '75%',
    borderWidth: 1,
    borderColor: '#cccccc',
    padding: 4,
    marginRight: 5,
    borderRadius: 15
  },
  taskListSection: {
    flex: 6,

  },
  taskOverviewStyle: {
    fontSize: 22,
    fontWeight: 'bold'

  },
  taskItemStyle: {
    margin: 6,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'blue',
    color: '#ffffff'

  },
  taskItemTextStyle: {
    color: '#ffffff',
  }
});
