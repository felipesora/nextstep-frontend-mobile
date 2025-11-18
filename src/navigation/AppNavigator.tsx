import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

// Screens
import Login from '../screens/Login';
import Cadastro from '../screens/Cadastro';
import Trilhas from '../screens/Trilhas';
import DetalhesTrilha from '../screens/DetalhesTrilha';
import AvaliarTrilha from '../screens/AvaliarTrilha';
import FormularioRecomendacao from '../screens/FormularioRecomendacao';
import Perfil from '../screens/Perfil';
import EditarPerfil from '../screens/EditarPerfil';
import ConfirmarDelecaoConta from '../screens/ConfirmarDelecaoConta';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator: React.FC = () => {

  const [initialRoute, setInitialRoute] = useState<keyof RootStackParamList | null>(null);
  
  useEffect(() => {
    const checkAuth = async () => {
      const valid = await AsyncStorage.getItem('usuarioId');
      if (valid) {
        setInitialRoute("Trilhas");
      } else {
        setInitialRoute("Login");
      }
    };
    checkAuth();
  }, []);

  if (!initialRoute) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRoute}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Trilhas" component={Trilhas} />
        <Stack.Screen name="DetalhesTrilha" component={DetalhesTrilha} />
        <Stack.Screen name="AvaliarTrilha" component={AvaliarTrilha} />
        <Stack.Screen name="Formulario" component={FormularioRecomendacao} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="EditarPerfil" component={EditarPerfil} />
        <Stack.Screen name="ConfirmarDelecaoConta" component={ConfirmarDelecaoConta} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
