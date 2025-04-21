// MyOrdersScreen.js
import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

const compras = [
  {
    id: '1',
    data: '17 de março',
    imagem: require('../assets/shorts_jeans.png'),
    status: 'Entregue',
  },
  {
    id: '2',
    data: '12 de março',
    imagem: require('../assets/blusa_la.png'),
    status: 'Entregue',
  },
  {
    id: '3',
    data: '01 de Janeiro',
    imagem: require('../assets/vestido_vermelho.png'),
    status: 'Entregue',
  }
];

export default function MyOrdersScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Cabeçalho com botão de voltar */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/seta_retorno.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>Minhas Compras</Text>
      </View>

      {/* Lista de compras */}
      <FlatList
        data={compras}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.imagem} style={styles.produtoImagem} />
            <View style={styles.infoBox}>
              <Text style={styles.data}>{item.data}</Text>
              <Text style={styles.status}>{item.status}</Text>
            </View>
          </View>
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F552A1',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
    tintColor: '#520039',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#520039',
  },
  list: {
    paddingBottom: 30,
  },
  card: {
    backgroundColor: '#F580C5',
    borderRadius: 20,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  produtoImagem: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginRight: 15,
  },
  infoBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  data: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 14,
  },
  status: {
    color: '#00FF00', // Verde neon
    fontWeight: 'bold',
    fontSize: 14,
  },
});
