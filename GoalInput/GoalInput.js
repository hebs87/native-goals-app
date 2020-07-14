import React from 'react';
import {Button, StyleSheet, TextInput, View} from "react-native";

const GoalInput = props => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Course Goal..."
        onChangeText={props.goalInputHandler}
        value={props.value}
      />
      <Button
        title="ADD"
        onPress={props.addGoalHandler}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    width: '80%',
  },
});

export default GoalInput;
