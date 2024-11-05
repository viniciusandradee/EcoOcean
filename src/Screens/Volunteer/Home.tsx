import React, { useContext, useEffect, useState } from "react";
import { TouchableOpacity, ImageBackground, Text, View, Image, ScrollView } from "react-native";
import styles from "@/Styles/VolunteerStyle/homeStyles";
import globalStyles from "@/Styles/variables";
import { AuthContext } from "@/Context/AuthContext";
import { Participacao, Partida } from "@/Types";

const availableImages = [
    require('../../../assets/Images/Beaches/Guaruja.png'),
    require('../../../assets/Images/Beaches/Riviera.png'),
    require('../../../assets/Images/Beaches/Ubatuba.png'),
];

const Home = ({ navigation }: any) => {
    const { partidasAtivas, partidasEncerradas, getAllMatches } = useContext(AuthContext);
    const [randomImageIndex, setRandomImageIndex] = useState<number>(0);

    useEffect(() => {
        getAllMatches(); // Obtém todas as partidas ao montar o componente
    }, []);


    const goToMatchDetails = (match: Partida) => {
        navigation.navigate("MatchDetails", {match});
    };

    const goToNewEvent = () => {
        // Lógica para navegar para a criação de um novo evento
        console.log("Novo Evento button pressed");
    };

    const goToOnGoingEvents = () => {
        navigation.navigate("OnGoingEvents");
    };

    const goToInfo = () => {
        navigation.navigate("Info");
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
                    <Text style={styles.title}>Eventos Antigos</Text>
                    <View style={styles.divider} />
                    <TouchableOpacity style={styles.newEventButton} onPress={goToOnGoingEvents}>
                        <Text style={styles.newEventButtonText}>Novo Evento</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.eventContainer}>
                    {partidasEncerradas.map((partida: Partida, index: number) => (
                        <TouchableOpacity style={styles.eventCard} onPress={() => goToMatchDetails(partida)} key={index}>
                            <Image source={availableImages[randomImageIndex]} style={styles.eventImage} />
                            <View style={styles.eventOverlay}>
                                <Text style={styles.eventLocation}>{partida.nome}</Text>
                                <Text style={styles.eventStatusFinished}>Encerrado</Text>
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