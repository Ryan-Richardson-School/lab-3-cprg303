import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import EmployeeForm from "./src/screens/employee-form";
import SignIn from "./src/screens/sign-in";
import SignUp from "./src/screens/sign-up";
import TabLayout from "./src/(tabs)/layout";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignIn} options={{headerShown:false, gestureEnabled:false}} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="TabLayout" component={TabLayout} options={{headerShown:false, gestureEnabled:false}} />
        <Stack.Screen name="EmployeeForm" component={EmployeeForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}