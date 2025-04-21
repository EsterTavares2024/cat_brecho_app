// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Feather';

// Telas
import LoginScreen from './screens/tela_login';
import SignupScreen from './screens/tela_cadastro';
import ForgotPasswordScreen from './screens/recuperacao_senha';
import NewPasswordScreen from './screens/nova_senha';
import PersonalDataScreen from './screens/dados_pessoais';
import ProfileScreen from './screens/tela_perfi';
import PurchaseScreen from './screens/tela_compra';
import MyOrdersScreen from './screens/tela_minhas_compras';
import VerifyPurchaseScreen from './screens/tela_verifique_sua_compra';
import QRCodePurchaseScreen from './screens/tela_compra_qrcode';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Abas principais (após login)
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
            case 'Profile': iconName = 'user'; break;
            case 'MyOrders': iconName = 'shopping-bag'; break;
            case 'QRCodePurchase': iconName = 'qrcode'; break;
            case 'Purchase': iconName = 'credit-card'; break;
            default: iconName = 'home';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Perfil' }} />
      <Tab.Screen name="MyOrders" component={MyOrdersScreen} options={{ title: 'Sacola' }} />
      <Tab.Screen name="Purchase" component={PurchaseScreen} options={{ title: 'Comprar' }} />
      <Tab.Screen name="QRCodePurchase" component={QRCodePurchaseScreen} options={{ title: 'QR Code' }} />
    </Tab.Navigator>
  );
}
