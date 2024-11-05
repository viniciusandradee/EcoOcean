import { StyleSheet } from 'react-native';
import { colors, fonts } from '@/Styles/variables';

export default StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20,
    },
    logo: {
        width: 70,
        height: 70,
    },

    back: {
        width: 40,
        height: 40,
    },






    main: {
        alignItems: 'center',
    },

    collectTitle: {
        fontSize: 30,
        color: colors.blue50,
        fontFamily: fonts.fontOpenSansBold
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

    lixoPick:{
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



    collectContainer:{
        alignItems: 'center',
        width: '100%',
        marginTop: 50,
    },

    collectText: {
        fontFamily: fonts.fontOpenSansBold,
        color: colors.blue50,
        fontSize: 16,
        marginBottom: 20,
    },

    collectBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center'
    },

    iconContainer: {
        flexDirection: "row",
    },

    icons: {
        width: 40,
        height: 40,
        marginRight: 10,
        marginTop: '5%'
    },

    registerButton: {
        marginTop: 50,
        borderRadius: 8,
        backgroundColor: colors.blue700,
        width: '60%',
        height: 50,
        justifyContent: 'center'
    },

    registerText: {
        textAlign: 'center',
        color: colors.blue50,
        fontSize: 18,
    },

});
