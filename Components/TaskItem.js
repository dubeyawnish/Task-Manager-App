import { StyleSheet, View, Text } from "react-native";

const TaskItem = (props) => {
    return (
        <View style={styles.taskItemStyle}>
            <Text style={styles.taskItemTextStyle} > {props.index + 1}: {props.item.text}</Text>
            <Text style={styles.taskItemTextStyle} >  {props.item.id}</Text>
        </View>
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