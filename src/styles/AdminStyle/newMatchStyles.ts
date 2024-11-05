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
        fontFamily: fonts.fontOpenSansBold,
        marginBottom: 50,
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
    


    areasContainer: {
        marginBottom: 20,
    },
    areasTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'white'
    },
    areaItem: {
        backgroundColor: '#ddd',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 10,
    },
    areaText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
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
