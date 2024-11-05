import React, { useContext, useEffect, useState } from "react";
import { TouchableOpacity, Image, ImageBackground, ScrollView, Text, View, Alert, TextInput  } from "react-native";
import styles from "@/Styles/VolunteerStyle/profileDetailsStyles";
import globalStyles from "@/Styles/variables";
import { AuthContext } from "@/Context/AuthContext";
import axios from "axios";


const ProfileDetails = ({ navigation, route }: any) => {
  const { voluntarioData, updateVoluntario, userData } = useContext(AuthContext);
  const { logout } = useContext(AuthContext);
  const [email, setEmail] = useState(voluntarioData?.email || "");
  const voluntarioId = voluntarioData?.id || 0;


  const goToProfile = () => {
    navigation.navigate("Profile");
  };

  const handleEmailChange = (newEmail: string) => {
    setEmail(newEmail);
  };

  const handleUpdate = async () => {
    try {
      await updateVoluntario(voluntarioId, { email }); 
      Alert.alert("Sucesso", "Email atualizado com sucesso!");
    } catch (error: any) {
      console.error("Erro ao atualizar email:", error.message);
      Alert.alert("Erro", "Erro ao atualizar nome. Por favor, tente novamente.");

    }
  };


  return (
    <ImageBackground
      source={require("../../../assets/Images/Backgrounds/HomeBackground.png")}
      style={globalStyles.backgroudImage}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={goToProfile}>
            <Image source={require("../../../assets/Images/Back.png")} style={styles.back} />
          </TouchableOpacity>
          <Image source={require("../../../assets/Images/Logo.png")} style={styles.logo} />
        </View>
        
        <View style={styles.main}>
          <View style={styles.profileInfo}>
            <Image source={require("../../../assets/Images/ProfilePic.png")} style={styles.profilePic} />
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.username}>{voluntarioData?.nome || "Nome"}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.email}>Email:</Text>
            <TextInput
            style={styles.input}
            value={email}
            placeholderTextColor="gray"
            onChangeText={handleEmailChange}
            placeholder={voluntarioData?.email || "Email@gmail.com"}
          />
            <TouchableOpacity onPress={handleUpdate}>
              <Image source={require("../../../assets/Images/EditIcon.png")} style={styles.editIcon} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.changePasswordContainer}>
          <TouchableOpacity onPress={logout} style={styles.changePasswordButton}>
            <Text style={styles.changePasswordText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default ProfileDetails;
