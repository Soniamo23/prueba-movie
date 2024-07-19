import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

export default function DashboardScreen({ navigation }) {
  const [films, setFilms] = useState([
    { id: '1', title: 'Rápidos y Furiosos', director: 'Rob Cohen', time: '1:46' },
    { id: '2', title: '2 Fast 2 Furious', director: 'John Singleton', time: '1:48' },
    { id: '3', title: 'The Fast and the Furious: Tokyo Drift', director: 'Justin Lin', time: '1:44' },
  ]);

  const handleDelete = (id) => {
    setFilms(films.filter(film => film.id !== id));
  };

  const handleEdit = (film) => {
    navigation.navigate('FilmForm', { film, updateFilm: (updatedFilm) => {
      setFilms(films.map(f => (f.id === updatedFilm.id ? updatedFilm : f)));
    }});
  };

  const handleAdd = () => {
    navigation.navigate('FilmForm', { addFilm: (newFilm) => {
      setFilms([...films, { ...newFilm, id: String(films.length + 1) }]);
    }});
  };

  const handleNavigateToScenes = (film) => {
    navigation.navigate('FilmScenes', { film });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Rápidos y Furiosos</Text>
      <Text style={styles.subHeader}>FILMS</Text>
      <FlatList
        data={films}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.filmContainer}>
            <TouchableOpacity
              style={styles.filmInfo}
              onPress={() => handleNavigateToScenes(item)}
            >
              <Text style={styles.filmTitle}>{item.title}</Text>
              <Text style={styles.directorText}>Director: {item.director}</Text>
              <Text style={styles.timeText}>Time: {item.time}</Text>
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
  filmContainer: {
    backgroundColor: '#202020', 
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filmInfo: {
    flex: 1,
  },
  filmTitle: {
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
