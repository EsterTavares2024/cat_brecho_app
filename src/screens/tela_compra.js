// PurchaseScreen.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const produtos = [
  {
    id: '1',
    nome: 'Short Jeans',
    imagem: require('../assets/shorts_jeans.png'),
    tamanho: '35',
    valor: 'R$ 5,00',
    estado: 'Novo',
  },
  {
    id: '2',
    nome: 'Vestido Floral',
    imagem: require('../assets/vestido_vermelho.png'),
    tamanho: 'M',
    valor: 'R$ 8,00',
    estado: 'Usado',
  },
  {
    id: '3',
    nome: 'Blusa Inverno',
    imagem: require('../assets/blusa_la.png'),
    tamanho: 'G',
    valor: 'R$ 10,00',
    estado: 'Usado',
  },
  {
    id: '4',
    nome: 'Short Jeans',
    imagem: require('../assets/shorts_jeans.png'),
    tamanho: '36',
    valor: 'R$ 6,00',
    estado: 'Novo',
  },
];

export default function PurchaseScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.imagem} style={styles.image} />
      <View style={styles.cardInfo}>
        <Text style={styles.cardText}>Tamanho: {item.tamanho}</Text>
        <Text style={styles.cardText}>Valor: {item.valor}</Text>
        <Text style={styles.cardText}>Estado: {item.estado}</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>COMPRAR</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header de busca */}
      <View style={styles.searchBar}>
        <Image source={require('../assets/menu_hamburguer.png')} style={styles.iconHeader} />
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar"
          placeholderTextColor="#BDBDBD"
        />
      </View>

      {/* Lista de produtos */}
      <FlatList
        data={produtos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.grid}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F552A1',
    paddingHorizontal: 15,
    paddingTop: 50,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F6CDE4',
    borderRadius: 30,
    paddingHorizontal: 15,
    marginBottom: 20,
    height: 40,
  },
  searchInput: {
    flex: 1,
    color: '#000',
    fontSize: 14,
  },
  iconHeader: {
    width: 20,
    height: 20,
    tintColor: '#520039',
  },
  grid: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    marginBottom: 20,
    width: '48%',
    overflow: 'hidden',
    backgroundColor: '#F580C5',
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  cardInfo: {
    padding: 10,
  },
  cardText: {
    color: '#fff',
    fontSize: 13,
    marginBottom: 2,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#520039',
    fontWeight: 'bold',
  },
});
