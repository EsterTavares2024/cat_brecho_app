// App.js
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { auth } from './firebase';
import { onAuthStateChanged, signInWithCredential, GoogleAuthProvider } from 'firebase/auth';
import 'react-native-gesture-handler';

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [user, setUser] = useState(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '633652294689-lbm4bkb0982cjepkclaf9r0jc0qfcd0b.apps.googleusercontent.com',
    iosClientId: 'SEU_IOS_CLIENT_ID',
    androidClientId: 'AIzaSyA45N-Kibx-99U_hYvTvzcXcMSMSPLgMmY',
    webClientId: '633652294689-lbm4bkb0982cjepkclaf9r0jc0qfcd0b.apps.googleusercontent.com',
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      {user ? (
        <View style={styles.profile}>
          <Image source={{ uri: user.photoURL }} style={styles.image} />
          <Text style={styles.text}>Olá, {user.displayName}</Text>
        </View>
      ) : (
        <Button
          title="Entrar com Google"
          disabled={!request}
          onPress={() => {
            promptAsync();
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profile: {
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  text: {
    marginTop: 20,
    fontSize: 18,
  },
});

// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Feather';

// Importar todas as telas que você criou
import LoginScreen from './screens/tela_login';
import SignupScreen from './screens/tela_cadastro';
import ForgotPasswordScreen from './screens/recuperacao_senha';
import NewPasswordScreen from './screens/nova_senha';
import PersonalDataScreen from './screens/dados_pessoais';
import ProfileScreen from './screens/tela_perfil';
import PurchaseScreen from './screens/tela_compra';
import MyOrdersScreen from './screens/tela_minhas_compras';
import VerifyPurchaseScreen from './screens/tela_verifique_sua_compra';
import QRCodePurchaseScreen from './screens/tela_compra_qrcode';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#2B7D2E',
        tabBarInactiveTintColor: '#aaa',
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Home': return <Icon name="home" size={size} color={color} />;
            case 'Profile': return <Icon name="user" size={size} color={color} />;
            case 'Purchase': return <Icon name="shopping-cart" size={size} color={color} />;
            case 'MyOrders': return <Icon name="shopping-bag" size={size} color={color} />;
            default: return <Icon name="circle" size={size} color={color} />;
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={VerifyPurchaseScreen} options={{ title: 'Início' }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Perfil' }} />
      <Tab.Screen name="Purchase" component={PurchaseScreen} options={{ title: 'Comprar' }} />
      <Tab.Screen name="MyOrders" component={MyOrdersScreen} options={{ title: 'Minha Sacola' }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
        <Stack.Screen name="PersonalData" component={PersonalDataScreen} />
        <Stack.Screen name="QRCodePurchase" component={QRCodePurchaseScreen} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
