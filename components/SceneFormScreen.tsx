import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function SceneFormScreen({ navigation, route }) {
  const { film, addScene } = route.params;

  const [description, setDescription] = useState('');
  const [budget, setBudget] = useState('');
  const [minutes, setMinutes] = useState('');

  const handleCreateScene = () => {
    const newScene = { description, budget, minutes: parseInt(minutes) };
    addScene(newScene);
    navigation.goBack(); 
  };

  const handleMinutesChange = (text) => {
   
    const numericText = text.replace(/[^0-9]/g, '');
    setMinutes(numericText);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Scene</Text>
      <TextInput
        style={styles.input}
        placeholder="Description"
        placeholderTextColor="#D6D6D6"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Director"
        placeholderTextColor="#D6D6D6" 
        value={budget}
        onChangeText={setBudget}
      />
      <TextInput
        style={styles.input}
        placeholder="Time"
        placeholderTextColor="#D6D6D6" 
        value={minutes}
        onChangeText={handleMinutesChange}
        keyboardType="numeric" 
      />
      <TouchableOpacity style={styles.button} onPress={handleCreateScene}>
        <Text style={styles.buttonText}>Create Scene</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333533', 
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD100', 
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#202020', 
    padding: 10,
    borderRadius: 5,
    color: '#D6D6D6', 
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#FFEE32', 
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#333533', 
    fontSize: 16,
  },
});
