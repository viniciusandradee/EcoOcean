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


    eventsHeader: {
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },

    title: {
        width: '100%',
        fontSize: 24,
        color: colors.blue50,
        textAlign: 'center',
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
    eventStatusCanceld: {
        fontSize: 14,
        color: "#FFA500",
        fontFamily: fonts.fontOpenSansBold
    },
    eventStatusScheduled: {
        fontSize: 14,
        color: "#5C5CFF",
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
