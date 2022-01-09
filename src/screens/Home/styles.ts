import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    width: 180,
    height: 40,
  },
  feed: {
    flex: 1,
    paddingHorizontal: 10,
  },
  iconView: {
    flexDirection: 'row'
  },
  buttonsIcons: {
    marginRight: 10
  },
  buttonIcon: {
    marginRight: 15
  },
  textView: {
    marginTop: 10,
    flexDirection: 'row',
  },
  textFirstQuestion: {
    fontSize: 25
  },
  textSeccondQuestion: {
    fontSize: 25,
    marginLeft: 5,
    fontWeight: 'bold',
  },
  inputView: {
    flex: 1,
    marginTop: 10,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.theme.tiny_gray,
  },
  inputText: {
    flex: 1,
    height: 40,
    padding: 10,
    fontSize: 17,
    color: Colors.theme.black,
  },
  iconInput: {
    marginLeft: 20
  },
  viewFeed: {
    marginBottom: 50
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    width: '80%',
    marginVertical: 30,
  },
  picker: {
    width: 40,
    marginTop: -15,
  },
})