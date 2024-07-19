import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

function FilmFormScreen({ navigation, route }) {
  const { film, addFilm, updateFilm } = route.params || {};
  const [title, setTitle] = useState(film ? film.title : '');
  const [time, setTime] = useState(film ? film.time : '');
  const [director, setDirector] = useState(film ? film.director : '');

  const handleSaveFilm = () => {
    const newFilm = { title, time, director };
    if (film) {
      updateFilm({ ...film, ...newFilm });
    } else {
      addFilm(newFilm);
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{film ? 'Edit Film' : 'Add New Film'}</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        placeholderTextColor="#D6D6D6"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Time (minutes)"
        placeholderTextColor="#D6D6D6"
        value={time}
        onChangeText={(text) => setTime(text.replace(/[^0-9]/g, ''))} // Solo permite números
        keyboardType="numeric" 
      />
      <TextInput
        style={styles.input}
        placeholder="Director"
        placeholderTextColor="#D6D6D6"
        value={director}
        onChangeText={setDirector}
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveFilm}>
        <Text style={styles.saveButtonText}>{film ? 'Update Film' : 'Create Film'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    padding: 20,
  },
  title: {
    color: '#FFD100', 
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#333533', 
    color: '#D6D6D6', 
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: '#FFEE32', 
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  saveButtonText: {
    color: '#202020', 
    fontSize: 16,
    textAlign: 'center',
  },
});

export default FilmFormScreen;
