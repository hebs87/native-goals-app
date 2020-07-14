import React, {useState} from 'react';
import {StyleSheet, ScrollView, Text, View, TextInput, Button} from 'react-native';

export default function App() {
  const [goal, setGoal] = useState('');
  const [goalList, setGoalList] = useState([]);

  const goalInputHandler = text => {
    setGoal(text);
  }

  const addGoalHandler = () => {
    setGoalList(currentGoals => [...currentGoals, goal]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Course Goal..."
          onChangeText={goalInputHandler}
          value={goal}
        />
        <Button
          title="ADD"
          onPress={addGoalHandler}
        />
      </View>
      <ScrollView>
        {
          goalList &&
          goalList.map((goal, i) => (
            <View key={i} style={styles.listItem}>
              <Text>{goal}</Text>
            </View>
          ))
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
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
  listItem: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 10,
  },
});
