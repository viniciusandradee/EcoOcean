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
        marginBottom: 20,
        marginTop: 20,
    },
    logo: {
        width: 70,
        height: 70,
    },
    ecoTitle: {
        color: colors.blue50,
        fontSize: 40,
        fontFamily: fonts.fontQuando,
    },
    infoIcon: {
        width: 25,
        height: 25,
    },



    main: {
        alignItems: "center",
        marginBottom: 20,
    },
    profileInfo: {
        alignItems: "center",
        marginBottom: 10,

    },
    profilePic: {
        width: 100,
        height: 100,
        borderRadius: 40,
        marginBottom: 10,
    },
    username: {
        fontFamily: fonts.fontOpenSansBold,
        fontSize: 28,
        color: colors.blue50,
    },


    emailText: {
        marginTop: 30, 
        fontFamily: fonts.fontOpenSansBold,
        fontSize: 20,
        color: colors.blue50,
    },







    changePasswordContainer: {
        alignItems: "center",
        marginTop: 20,
    },
    changePasswordButton: {
        backgroundColor: "#233DE1",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    changePasswordText: {
        fontSize: 18,
        color: "#fff",
    },
});
