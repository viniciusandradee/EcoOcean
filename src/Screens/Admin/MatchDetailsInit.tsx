import React, { useContext, useState } from 'react';
import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import styles from '@/Styles/AdminStyle/matchDetailsInitStyles';
import globalStyles from '@/Styles/variables';
import { AuthContext } from '@/Context/AuthContext';

const MatchDetailsInit = ({ route, navigation }: any) => {
    const { match } = route.params;
    const [error, setError] = useState<string | null>(null);
    const { iniciarPartida } = useContext(AuthContext);
    const { token } = useContext(AuthContext);

    const goToScheduledEvents = () => {
        navigation.navigate('ScheduledEvents');
    };

    const handleInit = async () => {
        try {
            await iniciarPartida(match.id, token);
            console.log("Partida iniciada com sucesso!");
            navigation.navigate('HomeScreen');
        } catch (err: any) {
            console.error("Erro ao iniciar partida:", err.message);
            setError(err.message || "Erro ao iniciar partida");
        }
    };



    return (
        <ImageBackground
            source={require('../../../assets/Images/Backgrounds/HomeBackground.png')}
            style={globalStyles.backgroudImage}
        >
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={goToScheduledEvents}>
                        <Image source={require("../../../assets/Images/Back.png")} style={styles.back} />
                    </TouchableOpacity>
                    <Image source={require("../../../assets/Images/Logo.png")} style={styles.logo} />
                </View>

                <View style={styles.main}>
                    <Text style={styles.title}>Detalhes do evento</Text>
                    <View style={styles.eventContainer}>
                        <View style={styles.eventNameBox}>
                            <Text style={styles.eventName}>{match.area.cidade}</Text>
                        </View>
                        <Image
                            source={require('../../../assets/Images/Beaches/Guaruja.png')}
                            style={styles.eventImage}
                        />
                    </View>
                    <View style={styles.statusButton}>
                        <Text style={styles.statusText}>{match.status}</Text>
                    </View>
                    <View style={styles.detailsContainer}>
                        <Text style={styles.detailsText}>Nome: {match.nome}</Text>
                        <Text style={styles.detailsText}>Descricao: {match.area.descricao}</Text>
                        <Text style={styles.detailsText}>CEP: {match.area.cep}</Text>
                        <Text style={styles.detailsText}>Estado: {match.area.estado}</Text>
                        <Text style={styles.detailsText}>Cidade: {match.area.cidade}</Text>
                        <Text style={styles.detailsText}>Rua: {match.area.rua}</Text>
                    </View>
                </View>

                <View style={styles.eventsHeaderButtons}>
                    <TouchableOpacity style={styles.finishedButton} onPress={handleInit}>
                        <Text style={styles.finishedText}>Iniciar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

export default MatchDetailsInit;
