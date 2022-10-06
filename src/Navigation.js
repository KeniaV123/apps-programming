import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import KeniaBoutique from "./screens/KeniaBoutique";
import Añadir from "./screens/Añadir";
import LoginScreen from "./screens/LoginScreen";
import Register from "./screens/Register";

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="KeniaBoutique" component={KeniaBoutique} />
      <Stack.Screen
        name="Añadir"
        component={Añadir}
        options={{ presentation: "modal" }}
      />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
