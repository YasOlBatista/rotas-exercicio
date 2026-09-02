import { TouchableOpacity, Text, StyleSheet, ImageBackground} from "react-native";
import { router } from "expo-router";

export default function Index() {

    function signIn() {
        router.navigate('/(tabs)');
    }

    return (
        <ImageBackground source={require('@/assets/friends.jpg')} style={styles.container} resizeMode="cover">
            <TouchableOpacity 
                style={styles.button} 
                activeOpacity={0.7}
                onPress={signIn}
            >
                <Text style={styles.tittle}>Ver episódios</Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {   
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 32,
    },
    button: {
        backgroundColor: '#6b0a2d',
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 20
    },
    tittle:{
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fbffde'
    },

})

