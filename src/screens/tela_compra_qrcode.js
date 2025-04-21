// VerifyPurchaseScreen.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function VerifyPurchaseScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Verifique sua compra</Text>

      {/* Box com imagem e info do produto */}
      <View style={styles.productBox}>
        <Image source={require('../assets/shorts_jeans.png')} style={styles.productImage} />
        <View style={styles.productDetails}>
          <Text style={styles.productName}>Short feminino</Text>
          <Text style={styles.productSize}>Tamanho : 35</Text>
          <Text style={styles.productPrice}>R$ : 5,00</Text>
        </View>
      </View>

      {/* QR Code */}
      <Text style={styles.label}>PIX</Text>
      <Image source={{ uri: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=PagamentoONG' }} style={styles.qr} />

      {/* Copiar chave */}
      <View style={styles.codeBox}>
        <Text style={styles.copyLabel}>ou copie e cole:</Text>
        <Text style={styles.pixCode}>
          asdasdasd~----~asd-asd-asdknasd-dkfgrngjsnognnoianwf-mksmdkm
        </Text>
      </View>

      {/* Botão Minhas Compras */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MyOrders')}>
        <Text style={styles.buttonText}>Minhas compras</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F552A1',
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#520039',
    marginTop: 30,
    marginBottom: 20,
  },
  productBox: {
    backgroundColor: '#F580C5',
    borderRadius: 20,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  productImage: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  productSize: {
    color: '#fff',
    fontSize: 14,
  },
  productPrice: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  label: {
    fontSize: 16,
    color: '#520039',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  qrcode: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  codeBox: {
    backgroundColor: '#F580C5',
    borderRadius: 20,
    padding: 15,
    marginBottom: 30,
    alignItems: 'center',
  },
  copyLabel: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 6,
  },
  pixCode: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  buttonText: {
    color: '#520039',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
