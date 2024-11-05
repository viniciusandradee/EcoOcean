import { StyleSheet } from 'react-native';
import { colors, fonts } from '@/Styles/variables';

export default StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        paddingVertical: 20,
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


    rankInfo:{
        flexDirection: "row",
        justifyContent: "center",
    },

    trophyIcon: {
        width: 40,
        height: 40,
        marginRight: 20,
    },

    title: {
        fontSize: 28,
        color: colors.blue50,
        fontFamily: fonts.fontOpenSansBold,
        marginBottom: 50,
    },
    rankContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.blue600,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginBottom: 10,
        width: '90%',
    },
    profilePic: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    username: {
        fontSize: 18,
        color: '#fff',
        flex: 1,
    },
    pointsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    pointsIcon: {
        width: 24,
        height: 24,
        marginRight: 5,
    },
    points: {
        fontSize: 18,
        color: '#fff',
    },
});

