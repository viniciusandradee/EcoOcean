import { useContext, useEffect, useState } from "react";
import { ActivityIndicator, Button, ImageBackground, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

import styles from "@/Styles/AdminStyle/homeStyles";
import globalStyles from "@/Styles/variables";
import { AuthContext } from "@/Context/AuthContext";
import { Partida } from '@/Types';

const Home = ({ navigation }: any) => {

    const availableImages = [
        require('../../../assets/Images/Beaches/Guaruja.png'),
        require('../../../assets/Images/Beaches/Riviera.png'),
        require('../../../assets/Images/Beaches/Ubatuba.png'),
    ];

    const { partidasAtivas, getAllMatches } = useContext(AuthContext);
    const [randomImageIndex, setRandomImageIndex] = useState<number>(0);

    useEffect(() => {
        getAllMatches();
    }, []);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * availableImages.length);
        setRandomImageIndex(randomIndex); 
    }, []);


    const goToNewMatch = () => {
        navigation.navigate("NewMatch");
    };
    const goToScheduledEvents = () => {
        navigation.navigate('ScheduledEvents');
    };
    const goToInfo = () => {
        navigation.navigate('Info');
    };

    const goToMatchDetails = (match: Partida) => {
        navigation.navigate("MatchDetails", { match });
    };

    return (
        <ImageBackground
            source={require("../../../assets/Images/Backgrounds/HomeBackground.png")}
            style={globalStyles.backgroudImage}
        >
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.header}>
                    <Image source={require("../../../assets/Images/Logo.png")} style={styles.logo} />
                    <Text style={styles.ecoTitle}>EcoOcean</Text>
                    <TouchableOpacity onPress={goToInfo}>
                        <Image source={require("../../../assets/Images/Info.png")} style={styles.infoIcon} />
                    </TouchableOpacity>
                </View>

                <View style={styles.eventsHeader}>
                    <View style={styles.divider} />
                    <View style={styles.eventsHeaderButtons}>
                        <TouchableOpacity style={styles.newEventButton} onPress={goToScheduledEvents}>
                            <Text style={styles.newEventButtonText}>Eventos Agendados</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.newEventButton} onPress={goToNewMatch}>
                            <Text style={styles.newEventButtonText}>Criar Evento</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.divider} />

                    <Text style={styles.title}>Eventos em Andamento</Text>

                </View>

                <View style={styles.eventContainer}>
                    {partidasAtivas.map((partida: Partida, index: number) => (
                        <TouchableOpacity style={styles.eventCard} onPress={() => goToMatchDetails(partida)} key={index}>
                            <Image source={availableImages[randomImageIndex]} style={styles.eventImage} />
                            <View style={styles.eventOverlay}>
                                <Text style={styles.eventLocation}>{partida.nome}</Text>
                                <Text style={styles.eventStatusActive}>ATIVO</Text>
                                <TouchableOpacity style={styles.eyeButton} onPress={() => goToMatchDetails(partida)}>
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

export default Home;