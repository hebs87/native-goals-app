import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button, FlatList} from 'react-native';

export default function App() {
  const [goal, setGoal] = useState('');
  const [goalList, setGoalList] = useState([]);

  const goalInputHandler = text => {
    setGoal(text);
  }

  const addGoalHandler = () => {
    setGoalList(currentGoals => [
      ...currentGoals,
      {id: Math.random().toString(), goal}
    ]);
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
      {
        goalList &&
        <FlatList
          keyExtractor={(item, idx) => item.id}
          data={goalList}
          renderItem={data => (
            <View style={styles.listItem}>
              <Text>{data.item.goal}</Text>
            </View>
          )}

        />
      }
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
