// NovaSenhaScreen.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

export default function NovaSenhaScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo com gatos topo */}
      <Image source={require('../assets/logo_resgatados.png')} style={styles.logo} />

      {/* Título */}
      <Text style={styles.title}>Recuperar Senha</Text>

      {/* Campo 1 */}
      <View style={styles.inputWrapper}>
        <Image source={require('../assets/icone_cadeado.png')} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Digite a nova Senha"
          placeholderTextColor="#FDDCF3"
          secureTextEntry
        />
      </View>

      {/* Campo 2 */}
      <View style={styles.inputWrapper}>
        <Image source={require('../assets/icone_cadeado.png')} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Confirmar nova Senha"
          placeholderTextColor="#FDDCF3"
          secureTextEntry
        />
      </View>

      {/* Botão */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>≫Próximo</Text>
      </TouchableOpacity>

      {/* Gato no canto inferior */}
      <Image source={require('../assets/gato_pirata.png')} style={styles.gato} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F552A1', // Rosa forte de fundo
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  logo: {
    width: 240,
    height: 140,
    resizeMode: 'contain',
    marginBottom: 10,
    marginTop: 30,
  },
  title: {
    fontSize: 26,
    color: '#520039',
    fontWeight: 'bold',
    marginBottom: 30,
    fontFamily: 'sans-serif-condensed',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: '#520039',
    marginBottom: 20,
    width: '100%',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
    tintColor: '#520039',
  },
  input: {
    flex: 1,
    height: 48,
    color: '#fff',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    color: '#520039',
    fontSize: 16,
    fontWeight: 'bold',
  },
  gato: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    alignSelf: 'flex-end',
    marginTop: 30,
  }
});
