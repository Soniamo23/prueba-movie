import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function CharacterForm({ route, navigation }) {
  const { character, addCharacter, updateCharacter } = route.params;

  const [description, setDescription] = useState(character?.description || '');
  const [costo, setCosto] = useState(character?.costo || '');
  const [stock, setStock] = useState(character?.stock || '');

  const handleSave = () => {
    const newCharacter = { id: character?.id || Date.now().toString(), description, costo, stock };
    character ? updateCharacter(newCharacter) : addCharacter(newCharacter);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{character ? 'Edit Character' : 'Add Character'}</Text>
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Costo"
        value={costo}
        onChangeText={setCosto}
      />
      <TextInput
        style={styles.input}
        placeholder="Stock"
        value={stock}
        onChangeText={setStock}
      />
      <Button title={character ? 'Update Character' : 'Create Character'} onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    padding: 10,
    borderBottomWidth: 1,
    marginVertical: 5,
  },
});
