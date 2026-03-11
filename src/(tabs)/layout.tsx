import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Home from "../screens/home";
import Forms from "../screens/forms";
const Tab = createBottomTabNavigator();

export default function TabLayout() {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarStyle: { height: 60 },
				tabBarActiveTintColor: "black",
				tabBarInactiveTintColor: "gray",
				tabBarShowLabel: false,
			}}
		>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					title: "Home",
					tabBarIcon: ({ color, size, focused }) => (
						<Ionicons
							name={focused ? "home" : "home-outline"}
							size={size}
							color={color}
						/>
					),
				}}
			/>
            <Tab.Screen
                name="Forms"
				component={Forms}
				options={{
					
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons
                            name={focused ? "person" : "person-outline"}
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
        
        </Tab.Navigator>
    );
}
    
