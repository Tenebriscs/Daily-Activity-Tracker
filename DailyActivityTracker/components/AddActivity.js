import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddActivity = ({ onAddActivity }) => {
  const [activityName, setActivityName] = useState('');

  const handleAdd = () => {
    if (activityName) {
      onAddActivity({ id: Date.now(), name: activityName });
      setActivityName('');
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Add new activity"
        style={styles.input}
        value={activityName}
        onChangeText={setActivityName}
      />
      <Button title="Add" onPress={handleAdd} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginRight: 10,
  },
});

export default AddActivity;