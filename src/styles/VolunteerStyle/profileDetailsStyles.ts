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
  },
  profileInfo: {
    alignItems: "center",
    marginBottom: 20,
  },
  profilePic: {
    width: 120,
    height: 120,
    borderRadius: 50,
  },
  infoRow: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  username: {
    fontSize: 28,
    color: colors.blue50,
    fontFamily: fonts.fontOpenSansBold,
    marginRight: 10,
  },
  email: {
    fontSize: 24,
    color: colors.blue50,
    fontFamily: fonts.fontOpenSansBold,
    marginRight: 10,
  },
  editIcon: {
    width: 25,
    height: 25,
    marginTop: 10,
  },

  input: {
    borderWidth: 2,
    borderColor: colors.blue500,
    borderRadius: 8,
    height: 50,
    marginTop: 10,
    paddingHorizontal: '30%',
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

