import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

// Supondo que você tenha uma função fetchData para buscar os dados da API
const fetchData = async () => {
  const response = await fetch('https://run.mocky.io/v3/cec9ddec-1c53-43b4-b82a-909f5b36157e');
  const data = await response.json();
  return data;
};

const Overview = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      const data = await fetchData();
      setTasks(data);
    };
    fetchDataFromAPI();
  }, []);

  const renderItem = (task) => (
    <TouchableOpacity
      key={task.id}
      style={[styles.item, { backgroundColor: task.completed ? '#90EE90' : '#FFA07A' }]}
      onPress={() => navigation.navigate('Details', { task })}>
      <Text style={styles.title}>{task.title}</Text>
      <Text>{task.completed ? 'Completo' : 'Não completo'}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={styles.main}>
          {tasks.map((task) => renderItem(task))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  scroll: {
    flex: 1,
  },
  main: {
    flex: 1,
    maxWidth: 960,
    marginHorizontal: 'auto',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Overview;
