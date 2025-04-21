// LoginScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  CheckBox,
} from 'react-native';

export default function LoginScreen({ navigation }) {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo com gatos */}
      <Image source={require('../assets/logo_resgatados.png')} style={styles.logo} />

      <Text style={styles.title}>Entrar</Text>

      {/* Campo E-mail */}
      <View style={styles.inputWrapper}>
        <Image source={require('../assets/arroba.png')} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          placeholderTextColor="#FCDCF2"
          keyboardType="email-address"
        />
      </View>

      {/* Campo Senha */}
      <View style={styles.inputWrapper}>
        <Image source={require('../assets/icone_cadeado.png')} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#FCDCF2"
          secureTextEntry
        />
      </View>

      {/* Linha com Admin + Esqueceu a senha */}
      <View style={styles.row}>
        <View style={styles.checkboxWrapper}>
          <CheckBox value={isAdmin} onValueChange={setIsAdmin} />
          <Text style={styles.checkboxLabel}>Admin</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Esqueceu a senha?</Text>
        </TouchableOpacity>
      </View>

      {/* Botão Acessar */}
      <TouchableOpacity style={styles.buttonPrimary}>
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>

      {/* Divider */}
      <Text style={styles.ou}>Ou</Text>

      {/* Google Button */}
      <TouchableOpacity style={styles.buttonGoogle}>
        <Image source={require('../assets/icone_google.png')} style={styles.googleIcon} />
        <Text style={styles.googleText}>Entrar com Google</Text>
      </TouchableOpacity>

      {/* Link Cadastro */}
      <Text style={styles.registerLink}>
        Ainda não possui uma conta? <Text style={styles.registerHighlight}>Cadastre-se</Text>
      </Text>

      {/* Gato no canto */}
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxLabel: {
    color: '#fff',
    fontSize: 14,
  },
  forgot: {
    color: '#fff',
    textDecorationLine: 'underline',
    fontSize: 13,
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
  registerLink: {
    fontSize: 13,
    color: '#fff',
  },
  registerHighlight: {
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
