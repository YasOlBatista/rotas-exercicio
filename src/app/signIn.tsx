import {View, TouchableOpacity, Text, StyleSheet} from "react-native";
import { router } from "expo-router";

export default function signIn() {
    

    return (
        <View style={styles.container}>
        
        </View>
    )
}

const styles = StyleSheet.create({
    container: {   
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 32,
        backgroundColor: '#6b0a2d'
    },
    button: {
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontWeight: 'bold',
        color: '#6b0a2d',
        fontSize: 18
    }
})

