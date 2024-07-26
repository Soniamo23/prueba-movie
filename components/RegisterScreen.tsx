import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, TextInput, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export default function RegisterScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ImageBackground
      source={require('../assets/logo.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Registro</Text>

        <TextInput
          style={styles.input}
          placeholder="Usuario"
          placeholderTextColor="#aaa"
          value={username}
          onChangeText={setUsername}
        />

        <TextInput
          style={styles.input}
          placeholder="Correo Electrónico"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor="#aaa"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            console.log('Usuario:', username);
            console.log('Correo Electrónico:', email);
            console.log('Contraseña:', password);
            navigation.navigate('Home');
          }}
        >
          <Text style={styles.buttonText}>Registrar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 1, 0, 0.5)',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 15,
    fontSize: 16,
    marginVertical: 10,
    color: 'black',
  },
  button: {
    backgroundColor: 'yellow',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
  },
});
