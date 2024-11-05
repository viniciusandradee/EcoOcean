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
  config: {
    width: 45,
    height: 45,
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

  joinDate: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  calendarIcon: {
    width: 20,
    height: 22,
    marginRight: 5,
  },
  joinDateText: {
    fontFamily: fonts.fontOpenSansBold,
    fontSize: 16,
    color: colors.blue50,
  },




  line: {
    height: 1,
    backgroundColor: colors.blue700,
    marginVertical: 40,
    width: "100%",
  },






  
  stats: {
    alignItems: "center",
  },
  statsTitle: {
    fontSize: 30,
    fontFamily: fonts.fontOpenSansBold,
    color: colors.blue50,
    marginBottom: 20,
  },

  statItem: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: colors.blue600,
    borderRadius: 10,
    width: '80%',
    height: 70,
  },
  
  statsBox: {
    alignItems: "center",
    marginRight: '40%',
    justifyContent: 'center',
  },

  statsBox2: {
    alignItems: "center",
    marginRight: '35%',
    justifyContent: 'center',
  },

  statIcon: {
    width: 35,
    height: 40,
    marginLeft: 15,
  },
  statIcon2: {
    width: 35,
    height: 35,
    marginLeft: 15,
  },
  statNumber: {
    fontSize: 24,
    color: "#fff",
  },
  statLabel: {
    fontSize: 14,
    color: "gray",
  },
});

