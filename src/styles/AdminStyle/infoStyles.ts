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
    alignItems: "center",
    marginBottom: 40,
    justifyContent: 'center',
    marginTop: '10%',
  },

  text: {
    color: colors.blue50,
    fontFamily: fonts.fontOpenSansSemiBold,
    fontSize: 18
  }

});

