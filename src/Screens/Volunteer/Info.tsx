import React, { useContext, useEffect, useState } from "react";
import { TouchableOpacity, Image, ImageBackground, ScrollView, Text, View, Alert, TextInput } from "react-native";
import styles from "@/Styles/VolunteerStyle/infoStyles";
import globalStyles from "@/Styles/variables";
import { AuthContext } from "@/Context/AuthContext";
import axios from "axios";


const Info = ({ navigation }: any) => {


    const goToHome = () => {
        navigation.navigate("HomeScreen");
    };

    return (
        <ImageBackground
            source={require("../../../assets/Images/Backgrounds/HomeBackground.png")}
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
                    <Text style={styles.text}>
                        Ao efetuarmos o login como Voluntário, o mesmo é direcionado para uma tela na qual
                        mostra os eventos que ele já participou. Podendo entrar em um novo evento e após entrar, 
                        é so levar o lixo até a banca que será mostrada nos detalhes do evento, com isso, 
                        é so mostrar o seu Id da participação para o admin que ele conclui o registro da coleta e atribui a pontuação a voce.
                    </Text>
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

export default Info;
