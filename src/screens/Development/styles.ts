import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    padding: 25,
    marginTop: 15,
    borderRadius: 20,
    backgroundColor: Colors.theme.default,
  },
  linkText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.theme.white,
  },
  gif: {
    width: 300,
    height: 200,
    marginBottom: 50
  }
})