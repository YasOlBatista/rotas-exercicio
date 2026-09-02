import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export function Card({ titulo, imagens, descricao }: { titulo: string; imagens: any; descricao: string }) {
    return(
        <View style={styles.card}>
            <Image source={imagens} style={styles.cardImage} />
            <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{titulo}</Text>
                <Text style={styles.cardDescription}>{descricao}</Text>
                <TouchableOpacity style={styles.cardButton}>
                    <Text style={styles.cardButtonText}>Assistir</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor: '#EDE8D0',
        borderRadius: 10,
        padding: 16,
        width: '90%',
        height: 150,
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardTitle:{
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
        textAlign: 'center',
    },
    cardButton:{
        backgroundColor: '#6b0a2d',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    cardButtonText:{
        color: '#ffffff',
        fontWeight: 'bold',
    },
    cardImage:{
        width: 100,
        height: 100,
        borderRadius: 10,
        resizeMode: 'cover',
    },
    cardContent:{
        flex: 1,
        alignItems: 'baseline',
        justifyContent: 'center',
        marginLeft: 16,   
    },
    cardDescription:{
        fontSize: 14,
        color: '#000000',
        marginBottom: 12,
        textAlign: 'left',
        width: 230,
    }
})
