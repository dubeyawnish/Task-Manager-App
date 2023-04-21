import { StyleSheet, Button, TextInput, View } from "react-native";
import { useState } from "react";

const AddTask = (props) => {
    const [task, setTask] = useState('');
    const taskInputHandler = (inputTask) => {
        setTask(inputTask);

    }
    const addTask = () => {
        props.addNewTask(task)//data is sending form child component to parent component with the help of callback function
        //setTask('');
    }


    return (<View style={styles.inputContainer}>
        <TextInput
            onChangeText={taskInputHandler}
            style={styles.inputBox}
            placeholder='Enter the task  Details'
        />
        <Button onPress={addTask} title='Add Tasks' />
    </View>)
}

export default AddTask;

const styles = StyleSheet.create({

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
}

)