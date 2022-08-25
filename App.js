import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import ProductosView from './screens/Productos';
import ProductosAdd from './screens/ProductosAdd';

function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name='productos' component={ProductosView} options= {{
        title: 'Listado de Productos',
        headerTitleAling: 'center',
      }}/>
      <Stack.Screen name='ProductosAdd' component={ProductosAdd} />
    </Stack.Navigator>
  )
}
function App(){
  return(
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

export default App;