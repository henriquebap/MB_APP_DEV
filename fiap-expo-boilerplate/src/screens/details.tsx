import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigation';

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

const Details = () => {
  const route = useRoute<DetailsScreenRouteProp>();
  const { task } = route.params;

  return (
    <View style={styles.container}>
      <View style={[styles.item, { backgroundColor: task.completed ? '#90EE90' : '#FFA07A' }]}>
        <Text style={styles.title}>{task.title}</Text>
      </View>
      <View style={[styles.item, { backgroundColor: '#FFFFFF' }]}>
        <Text>Status: {task.completed ? 'Completo' : 'Não completo'}</Text>
      </View>
      <View style={[styles.item, { backgroundColor: '#FFFFFF' }]}>
        <Text>Criado em: {task.createdAt}</Text>
      </View>
      <View style={[styles.item, { backgroundColor: '#FFFFFF' }]}>
        <Text>Local: {task.location}</Text>
      </View>
      <View style={[styles.item, { backgroundColor: '#FFFFFF' }]}>
        <Text>Notas: {task.notes}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  item: {
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Details;
