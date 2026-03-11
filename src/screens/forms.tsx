import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AppCard from "../components/AppCard";   


export default function Forms() {
    const navigation = useNavigation<any>();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Forms</Text>
            <AppCard
                title="Employee Form"
                description="Fill out the employee information form"
                onPress={() => {
                    navigation.navigate("EmployeeForm");
                }}
            />

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
});