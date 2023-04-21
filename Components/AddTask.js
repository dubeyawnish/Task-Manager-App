import { StyleSheet, Button, TextInput, View, Alert, Modal, Image } from "react-native";
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
                <Image style={styles.imageStyle} source={require('../assets/icon.png')} />
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
        padding: 15,
        backgroundColor: '#a7abab'

    },
    inputBox: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#cccccc',
        padding: 5,
        backgroundColor: 'white',

        borderRadius: 15
    },
    buttonGroup: {
        flexDirection: "row",

    },
    buttonStyle: {
        marginTop: 10,
        width: '35%',
        marginHorizontal: 10

    },
    imageStyle: {
        width: 100,
        height: 100,
        margin: 20,
    }
}

)