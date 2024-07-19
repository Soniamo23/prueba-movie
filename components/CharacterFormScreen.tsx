import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function CharacterForm({ route, navigation }) {
  const { character, addCharacter, updateCharacter } = route.params;

  const [description, setDescription] = useState(character ? character.description : '');
  const [costo, setCosto] = useState(character ? character.costo : '');
  const [stock, setStock] = useState(character ? character.stock : '');

  const handleSave = () => {
    const newCharacter = { id: character ? character.id : Date.now().toString(), description, costo, stock };
    if (character) {
      updateCharacter(newCharacter);
    } else {
      addCharacter(newCharacter);
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{character ? 'Edit Character' : 'Add Character'}</Text>
      <TextInput
        style={styles.input}
        placeholder="Description"
        placeholderTextColor="#D6D6D6"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Costo"
        placeholderTextColor="#D6D6D6"
        value={costo}
        onChangeText={setCosto}
      />
      <TextInput
        style={styles.input}
        placeholder="Stock"
        placeholderTextColor="#D6D6D6"
        value={stock}
        onChangeText={setStock}
      />
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>{character ? 'Update Character' : 'Create Character'}</Text>
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
