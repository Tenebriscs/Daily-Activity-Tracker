import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ActivityItem = ({ activity, onDeleteActivity }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{activity.name}</Text>
      <Button title="Delete" onPress={() => onDeleteActivity(activity.id)} />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
});

export default ActivityItem;