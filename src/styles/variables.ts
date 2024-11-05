import { StyleSheet } from 'react-native';

export const colors = {
    primaryColor: '#fff',
    secondaryColor: '#000',
    blue50: '#EBF5FF',
    blue100: '#DBECFF',
    blue200: '#BEDBFF',
    blue300: '#97C1FF',
    blue400: '#6E9CFF',
    blue500: '#4D77FF',
    blue600: '#2D4DFE',
    blue700: '#233DE1',
    blue800: '#1E35B5',
    blue900: '#21348E',
    blue950: '#141E52',
};

export const fonts = {
    primaryFont: 'Arial',
    secondaryFont: 'Verdana',
    fontQuando: 'Quando-Regular',
    fontOpenSansRegular: 'OpenSans-Regular',
    fontOpenSansSemiBold: 'OpenSans-SemiBold',
    fontOpenSansBold: 'OpenSans-Bold',
};



const globalStyles = StyleSheet.create({
    backgroudImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width: "100%"
    },
    blue50: {
        color: colors.blue50,
    }
});

export default globalStyles; 