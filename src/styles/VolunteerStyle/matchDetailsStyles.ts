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
        marginTop: 20,
    },
    title: {
        fontSize: 26,
        fontFamily: fonts.fontOpenSansBold,
        color: colors.blue50,
        marginBottom: 20,
    },
    eventContainer: {
        width: '90%',
        alignItems: 'center',
    },
    eventNameBox: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.blue500,
        borderRadius: 8,
        width: '70%',
        height: 40,
        marginBottom: 10,
        textAlign: 'center',
    },
    eventName: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: fonts.fontOpenSansBold,
        color: colors.blue50,
    },
    eventImage: {
        width: '100%',
        height: 150,
        borderRadius: 10,
    },
    statusButton: {
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: colors.blue600,
        borderRadius: 8,
    },
    statusText: {
        color: colors.blue50,
        fontFamily: fonts.fontOpenSansBold,
        fontSize: 16,
    },
    detailsText: {
        color: colors.blue50,
        paddingVertical: 2,
        fontFamily: fonts.fontOpenSansSemiBold,
        fontSize: 16,
    },
    detailsPontuacao: {
        color: '#FFB52E',
        paddingVertical: 2,
        fontFamily: fonts.fontOpenSansSemiBold,
        fontSize: 16,
    },
    detailsContainer: {
        marginTop: 20,
        width: '95%',
        padding: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.blue600,
    },

    buttonContainer: {
        alignItems: "center",
        marginTop: 20,
    },

    button: {
        backgroundColor: "#233DE1",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 20,
    },
    buttonText: {
        fontSize: 18,
        color: "#fff",
    },
});
