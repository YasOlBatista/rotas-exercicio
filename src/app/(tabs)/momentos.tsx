import { Card } from '@/components/Card';
import {View, Text, StyleSheet} from 'react-native';

export default function Momentos() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Momentos</Text>
            <Card 
                titulo="Momento 1" 
                imagens={require('@/assets/momento1.jpg')} 
                descricao='Chandler pede Monica em casamento.'
            />
            <Card 
                titulo="Momento 2" 
                imagens={require('@/assets/momento2.jpg')} 
                descricao='Ross descobre que vai ser pai e enfrenta dificuldades para escolher o nome do bebê.'
            />
            <Card 
                titulo="Momento 3" 
                imagens={require('@/assets/momento3.jpg')} 
                descricao='Ross sofre ao descobrir que Carol está seguindo em frente.'
            />
            <Card 
                titulo="Momento 4" 
                imagens={require('@/assets/momento4.jpg')} 
                descricao='Phoebe encontra algo estranho em sua bebida.'
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#6b0a2d'
    },
    button: {
        backgroundColor: '#EDE8D0',
        padding: 16,
        borderRadius: 12,
        marginTop: 16
    },
    buttonText: {
        color: '#6b0a2d',
        fontWeight: 'bold',
        fontSize: 16
    }

});