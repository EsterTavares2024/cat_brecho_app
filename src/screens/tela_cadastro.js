// CadastroScreen.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

export default function CadastroScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo topo com gatos */}
      <Image source={require('../assets/logo_resgatados.png')} style={styles.logo} />

      <Text style={styles.title}>Novo Usuário</Text>

      {/* Campo Nome */}
      <View style={styles.inputWrapper}>
        <Image source={require('../assets/icone_user.png')} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome completo"
          placeholderTextColor="#FDDCF3"
        />
      </View>

      {/* Campo Email */}
      <View style={styles.inputWrapper}>
        <Image source={require('../assets/arroba.png')} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          placeholderTextColor="#FDDCF3"
          keyboardType="email-address"
        />
      </View>

      {/* Campo Senha */}
      <View style={styles.inputWrapper}>
        <Image source={require('../assets/icone_cadeado.png')} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#FDDCF3"
          secureTextEntry
        />
      </View>

      {/* Botão Cadastrar */}
      <TouchableOpacity style={styles.buttonPrimary}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      <Text style={styles.ou}>Ou</Text>

      {/* Botão Google */}
      <TouchableOpacity style={styles.buttonGoogle}>
        <Image source={require('../assets/icone_google.jpg')} style={styles.googleIcon} />
        <Text style={styles.googleText}>Entrar com Google</Text>
      </TouchableOpacity>

      {/* Link login */}
      <Text style={styles.loginLink}>
        Já possui uma conta? <Text style={styles.loginHighlight}>Faça o Login</Text>
      </Text>

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
    width: 22,
    height: 22,
    marginRight: 10,
    tintColor: '#520039',
  },
  input: {
    flex: 1,
    height: 48,
    color: '#fff',
    fontSize: 16,
  },
  buttonPrimary: {
    backgroundColor: '#fff',
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 25,
    marginTop: 10,
  },
  buttonText: {
    color: '#520039',
    fontSize: 16,
    fontWeight: 'bold',
  },
  ou: {
    marginVertical: 16,
    color: '#520039',
    fontSize: 16,
  },
  buttonGoogle: {
    backgroundColor: '#F5DDE8',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    marginBottom: 20,
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  googleText: {
    color: '#520039',
    fontWeight: '600',
    fontSize: 15,
  },
  loginLink: {
    fontSize: 13,
    color: '#fff',
  },
  loginHighlight: {
    textDecorationLine: 'underline',
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
