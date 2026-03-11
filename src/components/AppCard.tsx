import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {Ionicons} from "@expo/vector-icons";    

export default function AppCard({ title, description, onPress }: { title: string; description: string; onPress: () => void }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
        <View style={styles.content}    >
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
       <TouchableOpacity onPress ={onPress} style={styles.button} >
        <Ionicons name="chevron-forward" size={32} color="#2563eb" />  
    </TouchableOpacity>
    </TouchableOpacity>

   
  );
}

const styles = StyleSheet.create({
    content:{
        flex:1,
        paddingRight:2,
   

    },
    card: {
    backgroundColor: "lightgrey",
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    flexDirection:"row",    
    },
    title: {
        fontSize: 18,
    },
    description: {
        fontSize: 14,
        color: "grey",
    },
    button:{
        padding:4,
    },
}); 