// Dados Pessoais Screen.js
import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

export default function PersonalDataScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Dados pessoais</Text>

      <TextInput style={styles.input} placeholder="Nome completo" placeholderTextColor="#999" />
      <TextInput style={styles.input} placeholder="E-mail" keyboardType="email-address" placeholderTextColor="#999" />
      <TextInput style={styles.input} placeholder="Telefone" keyboardType="phone-pad" placeholderTextColor="#999" />
      <TextInput style={styles.input} placeholder="CPF" keyboardType="numeric" placeholderTextColor="#999" />
      <TextInput style={styles.input} placeholder="Data de nascimento" placeholderTextColor="#999" />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#3B3B3B' },
  input: {
    height: 50, borderColor: '#D9D9D9', borderWidth: 1, borderRadius: 8, paddingHorizontal: 15, marginBottom: 16,
  },
  button: {
    backgroundColor: '#2B7D2E', paddingVertical: 14, borderRadius: 8, alignItems: 'center',
  },
  buttonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
});



