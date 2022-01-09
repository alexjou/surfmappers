import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export default StyleSheet.create({
  container: {
    padding: 10,
    width: '100%',
    flexDirection: 'row',
    borderBottomWidth: 1,
    backgroundColor: Colors.theme.white,
    borderBottomColor: Colors.theme.gray,
  },
  storiesContainer: {
    padding: 5,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  surfImage: {
    width: 55,
    height: 55,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewImage: {
    padding: 1.5,
    borderRadius: 30,
    borderWidth: 1.5,
    borderColor: Colors.theme.default,
  },
  storiesUserName: {
    fontSize: 12,
    marginTop: 3
  }
})