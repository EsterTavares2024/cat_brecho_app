// RecuperarSenhaScreen.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

export default function RecuperarSenhaScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo gatos topo */}
      <Image source={require('../assets/logo_resgatados.png')} style={styles.logo} />

      {/* Título */}
      <Text style={styles.title}>Recuperar Senha</Text>

      {/* Input de Email */}
      <View style={styles.inputWrapper}>
        <Image source={require('../assets/arroba.png')} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          placeholderTextColor="#FCDCF2"
          keyboardType="email-address"
        />
      </View>

      {/* Campo de Código (ilustrativo, não funcional aqui) */}
      <View style={styles.codeBox}>
        <Text style={styles.codeLine}>―   ―   ―   ―   ―</Text>
      </View>

      {/* Botão Enviar Código */}
      <TouchableOpacity>
        <Text style={styles.enviarCodigo}>Enviar Código</Text>
      </TouchableOpacity>

      {/* Reenviar Código (menor) */}
      <TouchableOpacity>
        <Text style={styles.reenviar}>Reenviar Código</Text>
      </TouchableOpacity>

      {/* Botão Próximo */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>≫Próximo</Text>
      </TouchableOpacity>

      {/* Gato canto inferior */}
      <Image source={require('../assets/gato_pirata.png')} style={styles.gato} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F552A1',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
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
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: '#520039',
  },
  input: {
    flex: 1,
    height: 48,
    color: '#fff',
    fontSize: 16,
  },
  codeBox: {
    marginVertical: 10,
    padding: 10,
  },
  codeLine: {
    fontSize: 24,
    color: '#fff',
    letterSpacing: 12,
    textAlign: 'center',
  },
  enviarCodigo: {
    color: '#fff',
    fontSize: 16,
    textDecorationLine: 'underline',
    marginTop: 10,
  },
  reenviar: {
    fontSize: 12,
    color: '#EAC6DC',
    textDecorationLine: 'underline',
    marginTop: 5,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginTop: 30,
  },
  buttonText: {
    color: '#520039',
    fontSize: 16,
    fontWeight: 'bold',
  },
  gato: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'flex-end',
    marginTop: 20,
  },
});
