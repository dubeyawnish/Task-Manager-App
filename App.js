import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import TaskItem from './Components/TaskItem';
import AddTask from './Components/AddTask';

export default function App() {

  const [showModal, setShowModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  const showModalHandler = () => {
    setShowModal(true);
  }

  const hideModalHandler = () => {
    setShowModal(false);

  }



  const addNewTask = (newTask) => {
    setTaskList((currentTaskList) =>
      [...currentTaskList,
      { text: newTask, id: Math.random().toString() }
      ]

    )
    setShowModal(false);
  }
  const deleteTask = (id) => {
    setTaskList((currentTaskList) => {
      return currentTaskList.filter((task) => task.id !== id)
    })
  }


  return (
    <View style={styles.mainContainer} >
      <Button title='Add New Task' onPress={showModalHandler} />
      {<AddTask addNewTask={addNewTask} visible={showModal} hideModal={hideModalHandler} />}

      <View style={styles.taskListSection}>
        {taskList.length > 0 ? <Text style={styles.taskOverviewStyle}>Your Task!</Text> : <Text></Text>}

        {/* for performance issue we use FlaList in place of Scroll view because when we have lots of task then it takes lot of time to load and in flat list as we scroll it laods untill that this is also example of lazy loading*/}
        <FlatList
          data={taskList}
          renderItem={({ item, index }) => {
            return <TaskItem item={item} index={index} onDeleteTask={deleteTask} />


          }}
          keyExtractor={(index, item) => {
            return item.id;
          }}

        />
        {/* <ScrollView>
        {
          taskList.map((taskItem, index) => {
            return (

              <View key={index} style={styles.taskItemStyle}>
                <Text style={styles.taskItemTextStyle} > {index + 1}: {taskItem}</Text>
              </View>

            )
          })
        }
        </ScrollView> */
        }
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

  taskListSection: {
    flex: 6,

  },
  taskOverviewStyle: {
    fontSize: 22,
    fontWeight: 'bold'

  },

});
