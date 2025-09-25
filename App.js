import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PantallaBienvenida from "./src/screens/PantallaBienvenida";
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen key={"PantallaBienvenida"} name={"PantallaBienvenida"} component={PantallaBienvenida} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;