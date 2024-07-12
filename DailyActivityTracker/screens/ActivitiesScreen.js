import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ActivityItem from '../components/ActivityItem';
import AddActivity from '../components/AddActivity';
import { getActivities, saveActivity, deleteActivity } from '../utils/storage';

const ActivitiesScreen = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const loadActivities = async () => {
      const storedActivities = await getActivities();
      if (storedActivities) {
        setActivities(storedActivities);
      }
    };
    loadActivities();
  }, []);

  const handleAddActivity = async (activity) => {
    const newActivities = [...activities, activity];
    setActivities(newActivities);
    await saveActivity(newActivities);
  };

  const handleDeleteActivity = async (id) => {
    const newActivities = activities.filter((activity) => activity.id !== id);
    setActivities(newActivities);
    await deleteActivity(newActivities);
  };

  return (
    <View style={styles.container}>
      <AddActivity onAddActivity={handleAddActivity} />
      <FlatList
        data={activities}
        renderItem={({ item }) => (
          <ActivityItem activity={item} onDeleteActivity={handleDeleteActivity} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default ActivitiesScreen;