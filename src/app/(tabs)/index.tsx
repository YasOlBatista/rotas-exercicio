import { Card } from '@/components/Card';
import {View, Text, StyleSheet} from 'react-native';

export default function Episodios() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Episódios</Text>
            <Card titulo="Episódio 1" imagens={require('@/assets/episodio1.jpg')} descricao='Rachel abandona seu casamento e vai morar com Monica.'/>
            <Card titulo="Episódio 2" imagens={require('@/assets/episodio2.jpg')} descricao='Ross descobre que Rachel o enganou e tenta se vingar.'/>
            <Card titulo="Episódio 3" imagens={require('@/assets/episodio3.jpg')} descricao='Chandler e Joey enfrentam um conflito de amizade.'/>
            <Card titulo="Episódio 4" imagens={require('@/assets/episodio4.jpg')} descricao='Phoebe revela um segredo sobre sua infância.'/>
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