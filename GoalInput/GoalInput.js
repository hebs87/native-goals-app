import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View, Modal} from "react-native";

const GoalInput = props => {
  const [goal, setGoal] = useState('');

  const goalInputHandler = text => {
    setGoal(text);
  }

  return (
    <Modal visible={props.showModal} animation="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Course Goal..."
          onChangeText={goalInputHandler}
          value={goal}
        />
        <Button
          title="ADD"
          onPress={() => props.addGoalHandler(goal)}
        />
      </View>
    </Modal>
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
