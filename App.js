import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();

import ProductosView from './vistas/productos';
import ProductosAdd from './vistas/productosAdd';

const MyStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name= 'productos' component={ProductosView} options={{
        title: '  Listado de Productos',
        headerTitleAlign: 'center',
      }}/>
      <Stack.Screen name= 'productosAdd' component= {ProductosAdd}/>
    </Stack.Navigator>
  )
}

const Home = () => {
  return (
    <View style={styles.view}>
      <Text>Home page</Text>
    </View>
  );
};

const Config = () => {
  return (
    <View style={styles.view}>
      <Text>Configuraciones</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Products" component={MyStack} />
        <Tab.Screen name="Config" component={Config} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    backgroundColor: "#bcbcbc",
  },
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;