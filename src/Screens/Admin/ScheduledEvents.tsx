import React, { useContext, useEffect, useState } from 'react';
import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import styles from '@/Styles/AdminStyle/scheduledEventsStyles';
import globalStyles from '@/Styles/variables';
import { AuthContext } from '@/Context/AuthContext';
import { Partida } from '@/Types';

const availableImages = [
    require('../../../assets/Images/Beaches/Guaruja.png'),
    require('../../../assets/Images/Beaches/Riviera.png'),
    require('../../../assets/Images/Beaches/Ubatuba.png'),
];

const ScheduledEvents = ({ route, navigation }: any) => {

    const { partidasAgendadas, getAllMatches } = useContext(AuthContext);
    const [randomImageIndex, setRandomImageIndex] = useState<number>(0);

    useEffect(() => {
        getAllMatches(); // Obtém todas as partidas ao montar o componente
    }, []);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * availableImages.length);
        setRandomImageIndex(randomIndex); 
    }, []);

    const goToHome = () => {
        navigation.navigate('HomeScreen');
    };

    const goToMatchDetailsInit = (match: Partida) => {
        navigation.navigate("MatchDetailsInit", { match });
    };

    return (
        <ImageBackground
            source={require('../../../assets/Images/Backgrounds/HomeBackground.png')}
            style={globalStyles.backgroudImage}
        >
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={goToHome}>
                        <Image source={require('../../../assets/Images/Back.png')} style={styles.back} />
                    </TouchableOpacity>
                    <Image source={require('../../../assets/Images/Logo.png')} style={styles.logo} />
                </View>

                <View style={styles.eventsHeader}>
                    <Text style={styles.title}>Eventos Agendados</Text>
                </View>

                <View style={styles.eventContainer}>
                    {partidasAgendadas.map((partida: Partida, index: number) => (
                        <TouchableOpacity style={styles.eventCard} onPress={() => goToMatchDetailsInit(partida)} key={index}>
                            <Image source={availableImages[randomImageIndex]} style={styles.eventImage} />
                            <View style={styles.eventOverlay}>
                                <Text style={styles.eventLocation}>{partida.nome}</Text>
                                <Text style={styles.eventStatusScheduled}>Agendado</Text>
                                <TouchableOpacity style={styles.eyeButton} onPress={() => goToMatchDetailsInit(partida)}>
                                    <Image source={require("../../../assets/Images/EyeIcon.png")} style={styles.eyeIcon} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

export default ScheduledEvents;
