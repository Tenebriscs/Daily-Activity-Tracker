import AsyncStorage from '@react-native-async-storage/async-storage';

const ACTIVITIES_KEY = 'activities';

export const getActivities = async () => {
  try {
    const activities = await AsyncStorage.getItem(ACTIVITIES_KEY);
    return activities ? JSON.parse(activities) : [];
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const saveActivity = async (activities) => {
  try {
    await AsyncStorage.setItem(ACTIVITIES_KEY, JSON.stringify(activities));
  } catch (e) {
    console.error(e);
  }
};

export const deleteActivity = async (activities) => {
  try {
    await AsyncStorage.setItem(ACTIVITIES_KEY, JSON.stringify(activities));
  } catch (e) {
    console.error(e);
  }
};