import React, { useContext, useState } from 'react';
import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import styles from '@/Styles/VolunteerStyle/joinMatchDetailsStyles';
import globalStyles from '@/Styles/variables';
import { AuthContext } from '@/Context/AuthContext';
import { Participacao } from '@/Types';

const JoinMatchDetails = ({ route, navigation }: any) => {
    const { match } = route.params;
    const { entrarNoEvento, userData, voluntarioData } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);
    const handleEntrarNoEvento = async () => {
        try {
            setIsLoading(true);
            // Crie um objeto Participacao com os IDs do voluntário e da partida
            const participacao: Participacao = {
                idVoluntario: voluntarioData?.id,
                idPartida: match.id
            };
            // Chame a função entrarNoEvento com o objeto Participacao
            await entrarNoEvento(participacao);
            navigation.navigate('HomeScreen');
            console.log("Usuário entrou no evento com sucesso!");
        } catch (error : any) {
            console.error("Erro ao entrar no evento:", error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const goToOnGoingEvents = () => {
        navigation.navigate('OnGoingEvents');
    };

    return (
        <ImageBackground
            source={require('../../../assets/Images/Backgrounds/HomeBackground.png')}
            style={globalStyles.backgroudImage}
        >
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={goToOnGoingEvents}>
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
                    <TouchableOpacity style={styles.button} onPress={handleEntrarNoEvento} disabled={isLoading}>
                        <Text style={styles.buttonText}>{isLoading ? "Entrando..." : "Entrar no evento"}</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

export default JoinMatchDetails;
