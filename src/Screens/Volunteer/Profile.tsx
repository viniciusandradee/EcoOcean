import React, { useContext, useState, useEffect  } from "react";
import { ScrollView, Image, TouchableOpacity, ImageBackground, Text, View, ActivityIndicator } from "react-native";
import { AuthContext } from "@/Context/AuthContext";
import styles from "@/Styles/VolunteerStyle/profileStyles";
import globalStyles from "@/Styles/variables";

const Profile = ({ navigation }: any) => {
  const { isLoading, voluntarioData, userData } = useContext(AuthContext);
  const [loading, setLoading] = useState<boolean>(false);

  const goToDetails = () => {
    navigation.navigate("ProfileDetails", { userId: userData?.id });
  };

  console.log("Profile: ", voluntarioData);


  if (loading || isLoading) {
    return <ActivityIndicator />;
  }


  return (
    <ImageBackground
      source={require("../../../assets/Images/Backgrounds/HomeBackground.png")}
      style={globalStyles.backgroudImage}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Image source={require("../../../assets/Images/Logo.png")} style={styles.logo} />
          <TouchableOpacity onPress={goToDetails}>
            <Image source={require("../../../assets/Images/Config.png")} style={styles.config} />
          </TouchableOpacity>
        </View>

        <View style={styles.main}>
          <View style={styles.profileInfo}>
            <Image source={require("../../../assets/Images/ProfilePic.png")} style={styles.profilePic} />
            <Text style={styles.username}>{userData?.auth.username || "Username"}</Text>
          </View>

          <View style={styles.joinDate}>
            <Text style={styles.joinDateText}>Nome: {voluntarioData?.nome || "nome"}</Text>
          </View>

          <View style={styles.joinDate}>
            <Text style={styles.joinDateText}>Email: {voluntarioData?.email || "Email@gmail.com"}</Text>
          </View>

          <View style={styles.joinDate}>
            <Text style={styles.joinDateText}>Função: {userData?.auth.role || "role"}</Text>
          </View>
        </View>

        <View style={styles.line} />

        <View style={styles.stats}>
          <Text style={styles.statsTitle}>Estatísticas</Text>
          <View style={styles.statItem}>
            <Image source={require("../../../assets/Images/MedalEventsIcon.png")} style={styles.statIcon} />
            <View style={styles.statsBox}>
              <Text style={styles.statNumber}>{userData?.events || 0}</Text>
              <Text style={styles.statLabel}>Eventos</Text>
            </View>
          </View>
          <View style={styles.statItem}>
            <Image source={require("../../../assets/Images/PointsIcon.png")} style={styles.statIcon2} />
            <View style={styles.statsBox2}>
              <Text style={styles.statNumber}>{userData?.points || 0}</Text>
              <Text style={styles.statLabel}>Total de pts</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Profile;
