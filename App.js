import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import TaskItem from './Components/TaskItem';
import AddTask from './Components/AddTask';

export default function App() {


  const [taskList, setTaskList] = useState([]);





  const addNewTask = (newTask) => {
    setTaskList((currentTaskList) =>
      [...currentTaskList,
      { text: newTask, id: Math.random().toString() }
      ]

    )
  }


  return (
    <View style={styles.mainContainer} >
      <AddTask addNewTask={addNewTask} />

      <View style={styles.taskListSection}>
        <Text style={styles.taskOverviewStyle}>Your Task!</Text>
        {/* for performance issue we use FlaList in place of Scroll view because when we have lots of task then it takes lot of time to load and in flat list as we scroll it laods untill that this is also example of lazy loading*/}
        <FlatList
          data={taskList}
          renderItem={({ item, index }) => {
            return <TaskItem item={item} index={index} />


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
