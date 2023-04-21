import { StyleSheet, View, Text, Pressable } from "react-native";

// bind(this,props.item.id ) function is used to pass the data from child component to parent component

const TaskItem = (props) => {

    //  const  deleteTask=()=>{           // we cannot send directly id from onpress={props.onDeleteTask(props.item.id)} if wedo this then get error for this we have to make function and pass form that     
    //  this will do same work as bind function send data from child component to parent components
    //     props.onDeleteTask(props.item.id);
    //  }


    return (


        <View style={styles.taskItemStyle}>
            <Pressable android_ripple={{ color: '#000000' }} onPress={props.onDeleteTask.bind(this, props.item.id)}>
                {/*  <Pressable onPress={deleteTask}> */}
                <Text style={styles.taskItemTextStyle} > {props.index + 1}: {props.item.text}</Text>
                <Text style={styles.taskItemTextStyle} >  {props.item.id}</Text>
            </Pressable>
        </View>



    )

}

export default TaskItem;

const styles = StyleSheet.create({
    taskItemStyle: {
        margin: 6,

        borderRadius: 10,
        backgroundColor: 'blue',
        color: '#ffffff'

    },
    taskItemTextStyle: {
        padding: 10,
        color: '#ffffff',
    }
});