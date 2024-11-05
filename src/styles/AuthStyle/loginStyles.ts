import { StyleSheet } from 'react-native';
import { colors, fonts } from '@/Styles/variables';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: '20%',
        justifyContent: "center",
    },
    ecoOceanTitle: {
        color: colors.blue50,
        fontFamily: fonts.fontQuando,
        fontSize: 40,
    },
    logo: {
        width: '25%',
        height: '100%',
    },
    main: {
        alignItems: 'center',
        marginTop: '15%',
    },
    input: {
        borderWidth: 2,
        borderColor: colors.blue500,
        borderRadius: 8,
        height: 50,
        width: '80%',
        marginTop: 20,
        paddingHorizontal: 10,
        color: colors.blue50,
    },


    loginButton: {
        marginTop: '10%',
        backgroundColor: colors.blue800,
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 65,
    },
    loginText: {
        color: colors.blue50,
        textAlign: 'center',
    },


    forgotPassword: {
        color: colors.blue50,
        marginTop: '2%',
    },

    error: {
        color: 'red'
    },


    signUp: {
        alignItems: 'flex-start',
        marginTop: 90,
    },
    noAccount: {
        color: colors.blue50,
    },
    signUpButton: {
        marginTop: '3%',
        backgroundColor: colors.blue800,
        borderRadius: 8,
        paddingVertical: '2%',
        paddingHorizontal: '1%',
        width: '35%', 
        alignSelf: 'flex-start',
    }
});

export default styles;
