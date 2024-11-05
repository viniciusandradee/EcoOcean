import { StyleSheet } from 'react-native';
import { colors, fonts } from '@/Styles/variables';

export default StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        justifyContent: "center",
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


    eventsHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },

    title: {
        width: '40%',
        fontSize: 24,
        color: colors.blue50,
        textAlign: 'center',
        fontFamily: fonts.fontOpenSansBold
    },

    divider: {
        width: 1,
        height: '80%',
        backgroundColor: colors.blue600,
        marginHorizontal: 10,
    },

    newEventButton: {
        backgroundColor: colors.blue700,
        borderRadius: 10,
        marginTop: '3%',
        paddingVertical: 8,
        paddingHorizontal: 35,
        alignSelf: "flex-start",
    },
    newEventButtonText: {
        fontSize: 18,
        color: colors.blue50,
        fontFamily: fonts.fontOpenSansBold
    },



    eventContainer: {
        marginTop: 20,
        paddingHorizontal: 20,
    },
    eventCard: {
        marginBottom: 20,
    },
    eventImage: {
        width: "100%",
        height: 200,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: colors.blue600,
    },
    eventOverlay: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 10,
    },
    eventLocation: {
        fontSize: 18,
        color: colors.blue50,
        fontFamily: fonts.fontOpenSansBold
    },
    eventStatusActive: {
        fontSize: 14,
        color: "#00FF00",
        fontFamily: fonts.fontOpenSansBold
    },
    eventStatusFinished: {
        fontSize: 14,
        color: "#FF0000",
        fontFamily: fonts.fontOpenSansBold
    },
    eyeButton: {
        position: "absolute",
        bottom: 10,
        right: 10,
    },
    eyeIcon: {
        width: 28,
        height: 20,
    },
});
