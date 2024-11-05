import React, { useContext, useState } from 'react';
import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import styles from '@/Styles/VolunteerStyle/matchDetailsStyles';
import globalStyles from '@/Styles/variables';
import { AuthContext } from '@/Context/AuthContext';

const MatchDetails = ({ route, navigation }: any) => {

    const { match } = route.params;
    const { voluntarioData, entrarNoEvento, token } = useContext(AuthContext);
    const [participacoes, setParticipacoes] = useState<any[]>([]);
    
    const goToHome = () => {
        navigation.navigate('HomeScreen');
    };

    return (
        <ImageBackground
            source={require('../../../assets/Images/Backgrounds/HomeBackground.png')}
            style={globalStyles.backgroudImage}
        >
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={goToHome}>
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
                        <Text style={styles.detailsText}>ID da Participação: 1</Text>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

export default MatchDetails;
