import React, { useContext, useEffect, useState } from "react";
import { TouchableOpacity, Image, ImageBackground, ScrollView, Text, View, Alert, TextInput } from "react-native";
import styles from "@/Styles/AdminStyle/infoStyles";
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
                        Ao efetuarmos o login como Administrador (Adm são Cadastrados manualmente no banco de dados)
                        vamos para a home, podendo ver os eventos ativos e criar um novo evento, após criar um novo evento, 
                        ele será agendado e precisará dar iniciao a ele na data descrita. Nisso o admin será responsável pelo registro da coleta, nessa
                        coleta o Adm informa o Id do voluntario, a quantidade de KGs, e o tipo de lixo, para assim somarmos os pontos do Voluntario.
                    </Text>
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

export default Info;
