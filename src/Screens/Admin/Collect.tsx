import React, { useContext, useState } from "react";
import { ActivityIndicator, Button, ImageBackground, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

import styles from "@/Styles/AdminStyle/collectStyles";
import globalStyles from "@/Styles/variables";
import RNPickerSelect from 'react-native-picker-select';
import { AuthContext } from "@/Context/AuthContext";
import { Partida } from "@/Types";

const Collect = ({ navigation, route }: any) => {

    const { match } = route.params;

    const { registrarColeta, token } = useContext(AuthContext);
    const [participacaoId, setParticipacaoId] = useState(""); // Estado para armazenar o ID da participação
    const [quantidade, setQuantidade] = useState(""); // Estado para armazenar a quantidade de coleta
    const [tipoLixo, setTipoLixo] = useState(""); // Estado para armazenar o tipo de lixo


    const handleSubmit = async () => {
        try {
            if (!participacaoId || !quantidade || !tipoLixo) {
                console.error("Por favor, preencha todos os campos.");
                return;
            }

            const coletaData = {
                tipoLixo: parseInt(tipoLixo),
                quantidade: parseFloat(quantidade),
                idParticipacao: parseInt(participacaoId),
            };

            await registrarColeta(coletaData);
            console.log(coletaData)
        } catch (err: any) {
            console.error("Erro ao registrar a coleta:", err.message);
        }
    };



    const goToMatchDetails = (match: Partida) => {
        navigation.navigate("MatchDetails", {match});
    };



    return (
        <ImageBackground
            source={require("../../../assets/Images/Backgrounds/HomeBackground.png")}
            style={globalStyles.backgroudImage}
        >
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => goToMatchDetails(match)}>
                        <Image source={require("../../../assets/Images/Back.png")} style={styles.back} />
                    </TouchableOpacity>
                    <Image source={require("../../../assets/Images/Logo.png")} style={styles.logo} />
                </View>

                <View style={styles.main}>
                    <Text style={styles.collectTitle}>Coleta</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Id da participação do voluntário"
                        placeholderTextColor="gray"
                        value={participacaoId}
                        onChangeText={setParticipacaoId}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Quantidade (em KG)"
                        placeholderTextColor="gray"
                        value={quantidade}
                        onChangeText={setQuantidade}
                    />

                    <View style={styles.lixoPick}>
                        <RNPickerSelect
                            placeholder={{
                                label: 'Selecione o tipo de lixo',
                                value: '',
                                placeholderTextColor: 'gray',
                                color: 'gray',
                                textAlignVertical: 'center',
                                textAlign: 'left'
                            }}
                            items={[
                                { label: 'Vidro', value: '1' },
                                { label: 'Papel', value: '2' },
                                { label: 'PLASTICO', value: '3' },
                                { label: 'METAL', value: '4' },
                                { label: 'ORGANICO', value: '5' },
                            ]}
                            style={{ inputAndroid: styles.inputAndroid }}
                            onValueChange={setTipoLixo}
                        />
                    </View>
                    <View style={styles.iconContainer}>
                        <Image style={styles.icons} source={require("../../../assets/Images/CanIcon.png")} />
                        <Image style={styles.icons} source={require("../../../assets/Images/PaperIcon.png")} />
                        <Image style={styles.icons} source={require("../../../assets/Images/PhoneIcon.png")} />
                        <Image style={styles.icons} source={require("../../../assets/Images/OrganicIcon.png")} />
                    </View>

                    <View style={styles.collectContainer}>

                        <TouchableOpacity style={styles.registerButton} onPress={handleSubmit}>
                            <Text style={styles.registerText}>Registrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>


            </ScrollView>
        </ImageBackground>
    );
};

export default Collect;