import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

export default function SceneCharacters({ route, navigation }) {
  const { film, scene } = route.params;
  const [characters, setCharacters] = useState([]);

  const loadCharacters = () => {
    
    switch (film.title) {
      case 'Rápidos y Furiosos':
        switch (scene.description) {
          case 'Race Wars':
            setCharacters([
              { id: '1', description: 'Dominic Toretto', costo: '500', stock: '10' },
              { id: '2', description: 'Brian O\'Conner', costo: '450', stock: '8' },
              { id: '3', description: 'Letty Ortiz', costo: '480', stock: '12' },
            ]);
            break;
          case 'Truck Heist':
            setCharacters([
              { id: '1', description: 'Brian O\'Conner', costo: '450', stock: '8' },
              { id: '2', description: 'Dominic Toretto', costo: '500', stock: '10' },
              { id: '3', description: 'Vince', costo: '400', stock: '6' },
            ]);
            break;
          case 'Final Race':
            setCharacters([
              { id: '1', description: 'Sean Boswell', costo: '480', stock: '12' },
              { id: '2', description: 'Han Lue', costo: '520', stock: '15' },
              { id: '3', description: 'Takashi', costo: '550', stock: '14' },
            ]);
            break;
          default:
            setCharacters([]);
            break;
        }
        break;
      case '2 Fast 2 Furious':
        switch (scene.description) {
          case 'Bridge Jump':
            setCharacters([
              { id: '1', description: 'Brian O\'Conner', costo: '450', stock: '8' },
              { id: '2', description: 'Roman Pearce', costo: '480', stock: '10' },
              { id: '3', description: 'Tej Parker', costo: '500', stock: '12' },
            ]);
            break;
          case 'Ejecto Seato':
            setCharacters([
              { id: '1', description: 'Brian O\'Conner', costo: '450', stock: '8' },
              { id: '2', description: 'Roman Pearce', costo: '480', stock: '10' },
              { id: '3', description: 'Suki', costo: '400', stock: '6' },
            ]);
            break;
          case 'Miami Police Station':
            setCharacters([
              { id: '1', description: 'Brian O\'Conner', costo: '450', stock: '8' },
              { id: '2', description: 'Roman Pearce', costo: '480', stock: '10' },
              { id: '3', description: 'Monica Fuentes', costo: '520', stock: '15' },
            ]);
            break;
          default:
            setCharacters([]);
            break;
        }
        break;
      case 'The Fast and the Furious: Tokyo Drift':
        switch (scene.description) {
          case 'Drift King Race':
            setCharacters([
              { id: '1', description: 'Sean Boswell', costo: '480', stock: '12' },
              { id: '2', description: 'Han Lue', costo: '520', stock: '15' },
              { id: '3', description: 'Takashi', costo: '550', stock: '14' },
            ]);
            break;
          case 'Parking Garage Fight':
            setCharacters([
              { id: '1', description: 'Sean Boswell', costo: '480', stock: '12' },
              { id: '2', description: 'Han Lue', costo: '520', stock: '15' },
              { id: '3', description: 'Twinkie', costo: '450', stock: '8' },
            ]);
            break;
          case 'Final Drift Race':
            setCharacters([
              { id: '1', description: 'Sean Boswell', costo: '480', stock: '12' },
              { id: '2', description: 'Han Lue', costo: '520', stock: '15' },
              { id: '3', description: 'Neela', costo: '500', stock: '12' },
            ]);
            break;
          default:
            setCharacters([]);
            break;
        }
        break;
      default:
        setCharacters([]);
        break;
    }
  };

  useEffect(() => {
    loadCharacters();
  }, [film, scene]);

  const handleDelete = (id) => {
    setCharacters(characters.filter(character => character.id !== id));
  };

  const handleEdit = (character) => {
    navigation.navigate('CharacterForm', { character, updateCharacter: (updatedCharacter) => {
      setCharacters(characters.map(c => (c.id === updatedCharacter.id ? updatedCharacter : c)));
    }});
  };

  const handleAdd = () => {
    navigation.navigate('CharacterForm', { addCharacter: (newCharacter) => {
      setCharacters([...characters, { ...newCharacter, id: String(characters.length + 1) }]);
    }});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{film.title} - {scene.description}</Text>
      <Text style={styles.subHeader}>CHARACTERS</Text>
      <FlatList
        data={characters}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.characterContainer}>
            <View style={styles.characterInfo}>
              <Text style={styles.characterTitle}>{item.description}</Text>
              <Text style={styles.directorText}>Costo: {item.costo}</Text>
              <Text style={styles.timeText}>Stock: {item.stock}</Text>
            </View>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity style={styles.iconButton} onPress={() => handleEdit(item)}>
                <Text style={styles.buttonText}>✏️</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton} onPress={() => handleDelete(item.id)}>
                <Text style={styles.buttonText}>🗑️</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
        <Text style={styles.addButtonText}>+</Text>
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
  },
  subHeader: {
    fontSize: 18,
    color: '#D6D6D6',
    marginVertical: 10,
  },
  characterContainer: {
    backgroundColor: '#202020',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  characterInfo: {
    flex: 1,
  },
  characterTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  directorText: {
    color: '#FFEE32',
    marginBottom: 5,
  },
  timeText: {
    color: '#D6D6D6',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  iconButton: {
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  addButton: {
    backgroundColor: '#FFEE32',
    padding: 15,
    borderRadius: 50,
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  addButtonText: {
    color: '#202020',
    fontSize: 30,
  },
});
