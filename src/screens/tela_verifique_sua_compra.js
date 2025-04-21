// ConfirmarEnderecoScreen.js
import React from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function ConfirmarEnderecoScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Verifique sua compra</Text>

      {/* Produto */}
      <View style={styles.productBox}>
        <Image source={require('../assets/shorts_jeans.png')} style={styles.productImage} />
        <View style={styles.productInfo}>
          <Text style={styles.productName}>Short feminino</Text>
          <Text style={styles.productSize}>Tamanho :35</Text>
          <Text style={styles.productPrice}>R$ : 5,00</Text>
        </View>
      </View>

      {/* Endereço */}
      <View style={styles.addressBox}>
        <Text style={styles.addressTitle}>Confirmar endereço de entrega:</Text>

        <Text style={styles.label}>CEP:</Text>
        <TextInput style={styles.input} placeholder="00000-000" placeholderTextColor="#FCDCF2" />

        <View style={styles.row}>
          <TextInput style={[styles.input, { flex: 1, marginRight: 10 }]} placeholder="Cidade" placeholderTextColor="#FCDCF2" />
          <TextInput style={[styles.input, { flex: 1 }]} placeholder="Bairro" placeholderTextColor="#FCDCF2" />
        </View>

        <TextInput style={styles.input} placeholder="Endereço" placeholderTextColor="#FCDCF2" />

        <View style={styles.row}>
          <TextInput style={[styles.input, { flex: 1, marginRight: 10 }]} placeholder="Número" placeholderTextColor="#FCDCF2" />
          <TextInput style={[styles.input, { flex: 1 }]} placeholder="Complemento" placeholderTextColor="#FCDCF2" />
        </View>
      </View>

      <Text style={styles.frete}>Valor Frete : R$ 2,00</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Finalizar Compra</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F552A1',
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#520039',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  productBox: {
    flexDirection: 'row',
    backgroundColor: '#F580C5',
    borderRadius: 20,
    padding: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  productImage: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginRight: 10,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    color: '#fff',
    fontWeight: 'bold',
  },
  productSize: {
    color: '#fff',
  },
  productPrice: {
    color: '#fff',
    fontWeight: 'bold',
  },
  addressBox: {
    backgroundColor: '#F580C5',
    padding: 15,
    borderRadius: 20,
    width: '100%',
    marginBottom: 20,
  },
  addressTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 10,
  },
  label: {
    color: '#fff',
    fontSize: 13,
    marginBottom: 4,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#520039',
    marginBottom: 10,
    paddingVertical: 6,
    paddingHorizontal: 10,
    color: '#fff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  frete: {
    alignSelf: 'flex-end',
    color: '#fff',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 25,
  },
  buttonText: {
    color: '#520039',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
