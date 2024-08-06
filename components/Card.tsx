// CharacterCard.js
import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

const CharacterCard = ({ character }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: character.imageUrl }} style={styles.image} resizeMode="cover" />
      <Text style={styles.name}>{character.name}</Text>
      <Text style={styles.info}>Race: {character.race} - Gender: {character.gender}</Text>
      <Text style={styles.info}>Base KI: {character.baseKI}</Text>
      <Text style={styles.info}>Total KI: {character.totalKI}</Text>
      <Text style={styles.info}>Affiliation: {character.affiliation}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#333533',
    borderRadius: 8,
    padding: 16,
    margin: 16,
    width: 200,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 8,
  },
  name: {
    color: '#FFD100',
    fontSize: 18,
    fontWeight: 'bold',
  },
  info: {
    color: '#D6D6D6',
    fontSize: 14,
    marginTop: 4,
  },
});

export default CharacterCard;
