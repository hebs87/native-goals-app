import React, {useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import GoalInput from "./GoalInput/GoalInput";
import GoalItem from "./GoalItem/GoalItem";

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
      <GoalInput
        value={goal}
        goalInputHandler={goalInputHandler}
        addGoalHandler={addGoalHandler}
      />
      {
        goalList &&
        <FlatList
          keyExtractor={(item, idx) => item.id}
          data={goalList}
          renderItem={data => (
            <GoalItem goal={data.item.goal} />
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
});
