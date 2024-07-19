import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

export default function FilmScenes({ route, navigation }) {
  const { film } = route.params;
  const [scenes, setScenes] = useState([]);

  const loadScenes = () => {
    switch (film.title) {
      case 'Rápidos y Furiosos':
        setScenes([
          { id: '1', description: 'Race Wars', director: 'Rob Cohen', minutes: '8' },
          { id: '2', description: 'Truck Heist', director: 'Rob Cohen', minutes: '10' },
          { id: '3', description: 'Final Race', director: 'Rob Cohen', minutes: '13' },
        ]);
        break;
      case '2 Fast 2 Furious':
        setScenes([
          { id: '1', description: 'Bridge Jump', director: 'John Singleton', minutes: '7' },
          { id: '2', description: 'Ejecto Seato', director: 'John Singleton', minutes: '9' },
          { id: '3', description: 'Miami Police Station', director: 'John Singleton', minutes: '11' },
        ]);
        break;
      case 'The Fast and the Furious: Tokyo Drift':
        setScenes([
          { id: '1', description: 'Drift King Race', director: 'Justin Lin', minutes: '8' },
          { id: '2', description: 'Parking Garage Fight', director: 'Justin Lin', minutes: '10' },
          { id: '3', description: 'Final Drift Race', director: 'Justin Lin', minutes: '12' },
        ]);
        break;
      default:
        setScenes([]); 
        break;
    }
  };
  useState(() => {
    loadScenes();
  }, );

  const handleDelete = (id) => {
    setScenes(scenes.filter(scene => scene.id !== id));
  };

  const handleEdit = (scene) => {
    navigation.navigate('SceneForm', { scene, updateScene: (updatedScene) => {
      setScenes(scenes.map(s => (s.id === updatedScene.id ? updatedScene : s)));
    }});
  };

  const handleAdd = () => {
    navigation.navigate('SceneForm', { addScene: (newScene) => {
      setScenes([...scenes, { ...newScene, id: String(scenes.length + 1) }]);
    }});
  };

  const handleNavigateToCharacters = (scene) => {
    navigation.navigate('SceneCharacters', { film, scene });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{film.title}</Text>
      <Text style={styles.subHeader}>SCENES</Text>
      <FlatList
        data={scenes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.sceneContainer}>
            <TouchableOpacity
              style={styles.sceneInfo}
              onPress={() => handleNavigateToCharacters(item)}
            >
              <Text style={styles.sceneTitle}>{item.description}</Text>
              <Text style={styles.directorText}>Director: {item.director}</Text>
              <Text style={styles.minutesText}>Minutes: {item.minutes}</Text>
            </TouchableOpacity>
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
  sceneContainer: {
    backgroundColor: '#202020', 
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sceneInfo: {
    flex: 1,
  },
  sceneTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF', 
  },
  directorText: {
    color: '#FFEE32', 
    marginBottom: 5,
  },
  minutesText: {
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
