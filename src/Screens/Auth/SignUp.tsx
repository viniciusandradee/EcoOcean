import React, { useContext, useState } from "react";
import { ActivityIndicator, ImageBackground, ScrollView, TouchableOpacity, Image, Text, TextInput, View,  Platform, Button} from "react-native";
import { AuthContext } from "@/Context/AuthContext";
import RNPickerSelect from 'react-native-picker-select';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import styles from '@/Styles/AuthStyle/signUpStyles';
import globalStyles from '@/Styles/variables'
import { Voluntario } from "@/Types";

const SignUp = ({ navigation }: any) => {
    const { signUp, isLoading, error } = useContext(AuthContext);

    const [voluntarioData, setVoluntarioData] = useState<Voluntario>({
        nome: '',
        email: '',
        dataNascimento: new Date(),
        sexo: '',
        username: '',
        password: '',
    });

    const [showDatePicker, setShowDatePicker] = useState(false);
    const [date, setDate] = useState(new Date());
    
    const onDateChange = (event: any, selectedDate: any) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(Platform.OS === 'ios');
        setDate(currentDate);
        const formattedDate = moment(currentDate).format('DD-MM-YYYY');
        handleInputChange('dataNascimento', formattedDate);
    };

    const handleInputChange = (field: keyof Voluntario, value: string) => {
        setVoluntarioData({ ...voluntarioData, [field]: value });
    };

    const goToLogin = () => {
        navigation.navigate('Login');
    };

    const handleSignUp = async () => {
        try {
            const formattedData = {
                ...voluntarioData,
                dataNascimento: moment(voluntarioData.dataNascimento).format('DD-MM-YYYY'),
            };
            await signUp(voluntarioData);
            // Navegar para a tela desejada após o cadastro bem-sucedido
        } catch (error) {
            // Lidar com o erro de cadastro, se necessário
        }
    };


    return (
        <ImageBackground source={require('../../../assets/Images/Backgrounds/SignUpBackground.png')} style={globalStyles.backgroudImage}>
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.header}>
                        <Image source={require('../../../assets/Images/Logo.png')} style={styles.logo} />
                        <Text style={styles.ecoOceanTitle}>EcoOcean</Text>
                    </View>

                    <View style={styles.main}>
                        <Text style={styles.mundialText}>Se registre para ajudar na coleta mundial!</Text>
                        <TextInput
                            value={voluntarioData.nome}
                            onChangeText={(value) => handleInputChange('nome', value)}
                            style={styles.input}
                            placeholder="Nome"
                            placeholderTextColor="gray"
                        />
                        <TextInput
                            value={voluntarioData.username}
                            onChangeText={(value) => handleInputChange('username', value)}
                            style={styles.input}
                            placeholder="Username"
                            placeholderTextColor="gray"
                        />
                        <TextInput
                            value={voluntarioData.email}
                            onChangeText={(value) => handleInputChange('email', value)}
                            style={styles.input}
                            placeholder="Email"
                            placeholderTextColor="gray"
                        />
                        <TextInput
                            value={voluntarioData.password}
                            onChangeText={(value) => handleInputChange('password', value)}
                            style={styles.input}
                            placeholder="Password"
                            placeholderTextColor="gray"
                        />
                       <View>
                            <Button title="Select Date of Birth" onPress={() => setShowDatePicker(true)} />
                            {showDatePicker && (
                                <DateTimePicker
                                    testID="dateTimePicker"
                                    value={date}
                                    mode="date"
                                    display="default"
                                    onChange={onDateChange}
                                />
                            )}
                            <Text>{moment(date).format('DD-MM-YYYY')}</Text>
                        </View>
                        <View style={styles.genderPick}>
                            <RNPickerSelect
                                placeholder={{
                                    label: 'Select Gender',
                                    value: '',
                                    placeholderTextColor: 'gray',
                                    color: 'gray',
                                    textAlignVertical: 'center',
                                    textAlign: 'left'
                                }}
                                value={voluntarioData.sexo}
                                onValueChange={(value) => handleInputChange('sexo', value)}
                                items={[
                                    { label: 'Male', value: '1' },
                                    { label: 'Female', value: '2' },
                                ]}
                                style={{ inputAndroid: styles.inputAndroid }}
                            />
                        </View>
                        {isLoading ? (
                            <ActivityIndicator />
                        ) : (
                            <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
                                <Text style={styles.signUpText}>Registrar</Text>
                            </TouchableOpacity>
                        )}
                    </View>

                    <View style={styles.login}>
                        <Text style={styles.withAccount}>Já possui conta?</Text>
                        <TouchableOpacity style={styles.loginButton} onPress={goToLogin}>
                            <Text style={styles.signUpText}>Logue aqui!</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </ImageBackground>
    );
};

export default SignUp;