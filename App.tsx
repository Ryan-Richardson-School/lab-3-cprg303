// import React from "react";
// import EmployeeForm from "./src/screens/EmployeeForm";

// export default function App() {
//   return <EmployeeForm />;
// }

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import EmployeeForm from "./src/screens/EmployeeForm";
import SignIn from "./src/screens/SignIn";
//import SignUp from "./src/screens/SignUp";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="EmployeeForm">
        <Stack.Screen name="EmployeeForm" component={EmployeeForm} />
        <Stack.Screen name="SignIn" component={SignIn} />
        {/* <Stack.Screen name="SignUp" component={SignUp} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}