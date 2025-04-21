import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { CheckBox } from 'react-native-elements';

export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo */}
      <Image source={require('./assets/logo_resgatados.png')} style={styles.logo} />

      {/* Título */}
      <Text style={styles.title}>Entrar</Text>

      {/* Campo E-mail */}
      <View style={styles.inputWrapper}>
        <Image source={require('./assets/arroba.png')} style={styles.icon} />
        <TextInput
          placeholder="Digite seu e-mail"
          placeholderTextColor="#FCDCF2"
          keyboardType="email-address"
          style={styles.input}
        />
      </View>

      {/* Campo Senha */}
      <View style={styles.inputWrapper}>
        <Image source={require('./assets/icone_cadeado.png')} style={styles.icon} />
        <TextInput
          placeholder="Digite sua senha"
          placeholderTextColor="#FCDCF2"
          secureTextEntry
          style={styles.input}
        />
      </View>

      {/* Linha: admin e esqueceu a senha */}
      <View style={styles.row}>
        <View style={styles.checkboxWrapper}>
          <CheckBox
            checked={isAdmin}
            onPress={() => setIsAdmin(!isAdmin)}
            checkedColor="#fff"
            uncheckedColor="#fff"
            containerStyle={styles.checkboxContainer}
          />
          <Text style={styles.checkboxLabel}>Admin</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.link}>Esqueceu a senha?</Text>
        </TouchableOpacity>
      </View>

      {/* Botão Acessar */}
      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.primaryButtonText}>Acessar</Text>
      </TouchableOpacity>

      <Text style={styles.ou}>Ou</Text>

      {/* Botão Google */}
      <TouchableOpacity style={styles.googleButton}>
        <Image source={require('./assets/icone_google.jpg')} style={styles.googleIcon} />
        <Text style={styles.googleText}>Entrar com Google</Text>
      </TouchableOpacity>

      {/* Link para cadastro */}
      <Text style={styles.register}>
        Ainda não possui uma conta? <Text style={styles.link}>Cadastre-se</Text>
      </Text>

      {/* Gato inferior */}
      <Image source={require('./assets/gato_pirata.png')} style={styles.cat} />
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
    width: 250,
    height: 140,
    resizeMode: 'contain',
    marginTop: 30,
    marginBottom: 10,
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
    width: '100%',
    marginBottom: 20,
  },
  icon: {
    width: 22,
    height: 22,
    tintColor: '#520039',
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 48,
    fontSize: 16,
    color: '#fff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
    alignItems: 'center',
  },
  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxContainer: {
    padding: 0,
    margin: 0,
    marginLeft: -10,
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  checkboxLabel: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 4,
  },
  link: {
    color: '#fff',
    fontSize: 13,
    textDecorationLine: 'underline',
  },
  primaryButton: {
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingVertical: 14,
    paddingHorizontal: 60,
    marginTop: 10,
  },
  primaryButtonText: {
    color: '#520039',
    fontWeight: 'bold',
    fontSize: 16,
  },
  ou: {
    marginVertical: 16,
    color: '#520039',
    fontSize: 16,
  },
  googleButton: {
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
  register: {
    fontSize: 13,
    color: '#fff',
  },
  cat: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'flex-end',
    marginTop: 20,
  },
});
