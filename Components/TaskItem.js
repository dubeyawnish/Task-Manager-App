import { StyleSheet, View, Text, Pressable } from "react-native";

// bind(this,props.item.id ) function is used to pass the data from child component to parent component

const TaskItem = (props) => {

    //  const  deleteTask=()=>{                this will do same work as bind function send data from child component to parent components
    //     props.onDeleteTask(props.item.id);
    //  }


    return (
         <Pressable onPress={props.onDeleteTask.bind(this,props.item.id)}>
        {/*  <Pressable onPress={deleteTask}> */}
         
            <View style={styles.taskItemStyle}>
                <Text style={styles.taskItemTextStyle} > {props.index + 1}: {props.item.text}</Text>
                <Text style={styles.taskItemTextStyle} >  {props.item.id}</Text>
            </View>

        </Pressable>

    )

}

export default TaskItem;

const styles = StyleSheet.create({
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