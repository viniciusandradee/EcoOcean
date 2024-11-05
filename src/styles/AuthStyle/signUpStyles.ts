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
        marginTop: '10%',
        justifyContent: "center",
    },

    ecoOceanTitle: {
        color: colors.blue50,
        fontFamily: fonts.fontQuando,
        fontSize: 40,
        marginRight: '21%'
    },
    logo: {
        width: '17%',
        height: '130%',
        marginRight: '6%'
    },



    main: {
        alignItems: 'center',
        marginTop: '10%',
    },
    mundialText: {
        width: '50%',
        textAlign: 'center',
        fontFamily: fonts.fontQuando,
        fontSize: 12,
        color: colors.blue50,
        marginBottom: 10,
    },

    input: {
        borderWidth: 2,
        borderColor: colors.blue500,
        borderRadius: 8,
        height: 50,
        width: '80%',
        marginTop: 10,
        paddingHorizontal: 10,
        color: colors.blue50,
    },

    error: {
        color: 'red'
    },

    genderPick:{
        height: 50,
        width: '80%',
        marginTop: 10,
        borderWidth: 2,
        borderColor: colors.blue500,
        borderRadius: 8,
        color: colors.blue50,
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
    },
    inputAndroid: {
        fontSize: 16,
        borderWidth: 2,
        borderColor: colors.blue500,
        borderRadius: 8,
        color: 'gray',
    },

    signUpButton: {
        marginTop: '10%',
        backgroundColor: colors.blue800,
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: '20%',
    },
    signUpText: {
        color: colors.blue50,
        textAlign: 'center',
    },


    login: {
        alignItems: 'flex-start',
        marginTop: 60
    },
    withAccount: {
        color: colors.blue50,
    },
    loginButton: {
        marginTop: '3%',
        backgroundColor: colors.blue800,
        borderRadius: 8,
        paddingVertical: '2%',
        paddingHorizontal: '1%',
        width: '35%', 
        alignSelf: 'flex-start',
    },
});

export default styles;
