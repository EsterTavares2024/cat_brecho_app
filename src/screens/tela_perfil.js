// CustomDrawerContent.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function CustomDrawerContent({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Image source={require('../assets/icone_user.png')} style={styles.avatar} />
        <View>
          <Text style={styles.username}>Usuario</Text>
          <Text style={styles.subtitle}>Meu Perfil</Text>
        </View>
      </View>

      {/* Itens do menu */}
      <View style={styles.menu}>
        <DrawerItem icon="home" label="Início" onPress={() => navigation.navigate('Home')} />
        <DrawerItem icon="box" label="Minha Sacola" onPress={() => navigation.navigate('MyOrders')} />
        <DrawerItem icon="user" label="Minha Conta" onPress={() => navigation.navigate('Profile')} />
        <DrawerItem icon="list" label="Comprar" onPress={() => navigation.navigate('Categorias')} />
      </View>

      {/* Sair */}
      <TouchableOpacity style={styles.logout} onPress={() => navigation.navigate('Login')}>
        <Image source={require('../assets/icone_sair.png')} style={styles.icon} />
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

// Componente de item de menu
function DrawerItem({ icon, label, onPress }) {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <Image source={getIcon(icon)} style={styles.icon} />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

// Ícones locais
function getIcon(name) {
  switch (name) {
    case 'home': return require('../assets/icone_home.png');
    case 'box': return require('../assets/icone_minha_sacola.png');
    case 'user': return require('../assets/icone_user.png');
    case 'list': return require('../assets/icone_comprar.png');
    case 'power': return require('../assets/icone_sair.png');
    default: return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 30,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#F552A1',
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  username: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  subtitle: {
    color: '#fff',
    fontSize: 13,
  },
  menu: {},
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 12,
    tintColor: '#000',
  },
  label: {
    fontSize: 16,
    color: '#000',
  },
  logout: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  logoutText: {
    fontSize: 16,
    marginLeft: 10,
  },
});
