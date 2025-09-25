import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PantallaBienvenida from "./src/screens/PantallaBienvenida";
import InicioSesion from "./src/screens/InicioSesion";
import RestablecerContraseña from "./src/screens/RestablecerContraseña";
import CrearCuenta from "./src/screens/CrearCuenta";

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="PantallaBienvenida">
			<Stack.Screen key={"PantallaBienvenida"} name={"PantallaBienvenida"} component={PantallaBienvenida} />
			<Stack.Screen key={"InicioSesion"} name={"InicioSesion"} component={InicioSesion} />
			<Stack.Screen key={"RestablecerContraseña"} name={"RestablecerContraseña"} component={RestablecerContraseña} />
			<Stack.Screen key={"CrearCuenta"} name={"CrearCuenta"} component={CrearCuenta} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;