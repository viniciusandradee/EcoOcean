import { useContext, useState } from "react";
import { ActivityIndicator, Button, ImageBackground, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

import styles from "@/Styles/AdminStyle/configStyles";
import globalStyles from "@/Styles/variables";
import { AuthContext } from "@/Context/AuthContext";

const Config = ({ navigation }: any) => {

    const { isLoading, adminData, userData } = useContext(AuthContext);
    const [loading, setLoading] = useState<boolean>(false);

    const goToInfo = () => {
        navigation.navigate('Info');
    };

    if (loading || isLoading) {
      return <ActivityIndicator />;
    }

    const goToMatchDetails = () => {
        navigation.navigate("MatchDetails");
    };
    const { logout } = useContext(AuthContext);

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

                <View style={styles.main}>
                    <View style={styles.profileInfo}>
                        <Image source={require("../../../assets/Images/ProfilePic.png")} style={styles.profilePic} />
                        <Text style={styles.username}>{userData?.auth.username || "Username"}</Text>
                        <Text style={styles.emailText}>Nome: {userData?.nome || "Nome"}</Text>
                        <Text style={styles.emailText}>Email: {userData?.email || "Email@gmail.com"}</Text>
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

export default Config;