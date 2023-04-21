import { StyleSheet, Button, TextInput, View, Alert, Modal } from "react-native";
import { useState } from "react";

const AddTask = (props) => {
    const [task, setTask] = useState('');
    const taskInputHandler = (inputTask) => {
        setTask(inputTask);

    }
    const addTask = () => {

        if (task) {
            props.addNewTask(task)//data is sending form child component to parent component with the help of callback function
            //setTask('');

        }
        else {
            Alert.alert("This field cannot be empty!!!!")
        }

    }


    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    onChangeText={taskInputHandler}
                    style={styles.inputBox}
                    placeholder='Enter the task  Details'
                />
                <View style={styles.buttonGroup} >
                    <View style={styles.buttonStyle}>
                        <Button onPress={addTask} title='Add Tasks' />
                    </View>
                    <View style={styles.buttonStyle}>
                        <Button title='Cancel' onPress={props.hideModal} />
                    </View>
                </View>

            </View>
        </Modal>

    )
}

export default AddTask;

const styles = StyleSheet.create({

    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        padding: 15,

    },
    inputBox: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#cccccc',
        padding: 5,

        borderRadius: 15
    },
    buttonGroup: {
        flexDirection: "row",

    },
    buttonStyle: {
        marginTop: 10,
        width: '35%',
        marginHorizontal: 10

    }
}

)