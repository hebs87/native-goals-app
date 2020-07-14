import React, {useState} from 'react';
import {StyleSheet, View, FlatList, Button} from 'react-native';
import GoalInput from "./GoalInput/GoalInput";
import GoalItem from "./GoalItem/GoalItem";

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addGoalHandler = goal => {
    setGoalList(currentGoals => [
      ...currentGoals,
      {id: Math.random().toString(), goal}
    ]);
  }

  const deleteGoal = goalId => {
    setGoalList(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  }

  const showAddModal = () => {
    setShowModal(!showModal)
  }

  return (
    <View style={styles.container}>
      <Button onPress={showAddModal} title="Add New Goal" />
      <GoalInput
        showModal={showModal}
        addGoalHandler={addGoalHandler}
      />
      {
        goalList &&
        <FlatList
          keyExtractor={(item, idx) => item.id}
          data={goalList}
          renderItem={data => (
            <GoalItem
              id={data.item.id}
              goal={data.item.goal}
              deleteGoal={deleteGoal}
            />
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
