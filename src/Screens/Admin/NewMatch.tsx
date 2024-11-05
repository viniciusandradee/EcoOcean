import React, { useContext, useState } from 'react';
import { Image, ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from '@/Styles/AdminStyle/newMatchStyles';
import globalStyles from '@/Styles/variables';
import { AuthContext } from '@/Context/AuthContext';

const NewMatch = ({ navigation }: any) => {

    const { createPartida, userData, token } = useContext(AuthContext);
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [areaId, setAreaId] = useState("");

    const handleSubmit = async () => {
        try {
          if (!nome || !descricao || !areaId) {
            console.error("Por favor, preencha todos os campos.");
            return;
          }
    
          const partidaData = {
            nome: nome,
            descricao: descricao,
            areaId: parseInt(areaId),
            voluntarioAdminId: userData?.id,
          };
    
          console.log("Partida Data:", partidaData); // Log para verificar os dados antes de enviar
    
          if (!partidaData.voluntarioAdminId || !partidaData.areaId) {
            console.error("ID do administrador ou da área está nulo.");
            return;
          }
    
          await createPartida(partidaData);
          console.log("Partida criada com sucesso:", partidaData);
          navigation.navigate('ScheduledEvents');
          // Após o sucesso, redirecione ou mostre uma mensagem de sucesso.
        } catch (err: any) {
          console.error("Erro ao criar a partida:", err.message);
        }
      };

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
                    <Text style={styles.collectTitle}>Criar Evento</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Nome:"
                        placeholderTextColor="gray"
                        value={nome}
                        onChangeText={setNome}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Descrição data prevista:"
                        placeholderTextColor="gray"
                        value={descricao}
                        onChangeText={setDescricao}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="ID da Área:"
                        placeholderTextColor="gray"
                        value={areaId}
                        onChangeText={setAreaId}
                    />

                    <TouchableOpacity style={styles.registerButton} onPress={handleSubmit}>
                        <Text style={styles.registerText}>Registrar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

export default NewMatch;
