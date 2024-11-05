import { useContext, useState } from "react";
import { ActivityIndicator, ScrollView, ImageBackground, TouchableOpacity, Image, Text, TextInput, View } from "react-native";
import { AuthContext } from "@/Context/AuthContext";

import styles from '@/Styles/AuthStyle/loginStyles';
import globalStyles from '@/Styles/variables'

const Login = ({ navigation }: any) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { login, isLoading, error } = useContext(AuthContext);

    const goToSignUp = () => {
        navigation.navigate('SignUp');
    };

    const handleLogin = () => {
        console.log('Logging in with', { username, password }); // Add this line to check the inputs
        login(username, password);
    };

    return (
        <ImageBackground source={require('../../../assets/Images/Backgrounds/LoginBackground.png')} style={globalStyles.backgroudImage}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.ecoOceanTitle}>Entrar na EcoOcean</Text>
                    <Image source={require('../../../assets/Images/Logo.png')} style={styles.logo} />
                </View>

                <View style={styles.main}>
                    <TextInput onChangeText={setUsername} value={username} style={styles.input} placeholder="Username" placeholderTextColor="gray" />
                    <TextInput onChangeText={setPassword} value={password} style={styles.input} placeholder="Password" placeholderTextColor="gray" secureTextEntry />
                    <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
                    {isLoading ? (
                        <ActivityIndicator />
                    ) : (
                        <View>
                            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                                <Text style={styles.loginText}>Login</Text>
                            </TouchableOpacity>
                            {error && <Text style={styles.error}>{error}</Text>}

                        </View>
                    )}
                </View>

                <View style={styles.signUp}>
                    <Text style={styles.noAccount}>Ainda não possui conta?</Text>
                    <TouchableOpacity style={styles.signUpButton} onPress={goToSignUp}>
                        <Text style={styles.loginText}>Criar nova conta</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

export default Login;
