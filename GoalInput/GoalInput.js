import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View, Modal} from "react-native";

const GoalInput = props => {
  const [goal, setGoal] = useState('');

  const goalInputHandler = text => {
    setGoal(text);
  }

  const addGoalHandler = () => {
    props.addGoalHandler(goal);
    setGoal('');
  }

  const closeAddModal = () => {
    props.closeAddModal();
    setGoal('');
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
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button
              title="ADD"
              onPress={addGoalHandler}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="CANCEL"
              color='red'
              onPress={closeAddModal}
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    width: '80%',
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'space-evenly',
  },
  button: {
    width: '40%',
  },
});

export default GoalInput;
