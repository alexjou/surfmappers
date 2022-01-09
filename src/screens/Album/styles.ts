import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  containerGalery: {
    width: '100%',
    height: '100%',
    marginVertical: 20,
    justifyContent: 'space-between',
    backgroundColor: Colors.theme.white,
  },
  containerTitle: {
    margin: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonShare: {
    padding: 3,
    borderWidth: 1,
    marginRight: 10,
    borderRadius: 10,
    borderColor: Colors.theme.default
  },
  header: {
    padding: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewTexts: {
    width: '85%',
    marginRight: 10,
  },
  buttonBack: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerCamera: {
    borderTopWidth: 0.5,
    paddingVertical: 15,
    flexDirection: 'row',
    marginHorizontal: 10,
    borderColor: Colors.theme.gray,
    justifyContent: 'space-between',
  },
  buttonCamera: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconCamera: {
    borderWidth: 1,
    marginRight: 5,
    paddingLeft: 8,
    paddingRight: 5,
    borderRadius: 10,
    paddingVertical: 4,
    borderColor: Colors.theme.gray,
  },
  viewChat: {
    flexDirection: 'row'
  },
  buttonChat: {
    padding: 5,
    borderWidth: 1,
    marginRight: 10,
    borderRadius: 10,
    borderColor: Colors.theme.default
  },
  nameUser: {
    fontWeight: 'bold',
    paddingHorizontal: 5,
    color: Colors.theme.gray,
  },
  buttonSeparate: {
    marginRight: 25
  },
  textNameScreen: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  image: {
    width: 225,
    height: 50
  },
  feed: {
    flex: 1,
    width: '100%',
    height: '100%',
    paddingHorizontal: 10
  },
  iconView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textView: {
    fontSize: 24,
    fontWeight: 'bold',
    flexDirection: 'row',
  },
  text1: {
    fontSize: 25
  },
  text2: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 5
  },
  inputView: {
    flex: 1,
    marginTop: 10,
    flexDirection: 'row',
  },
  inputText: {
    flex: 1,
    height: 40,
    padding: 10,
    fontSize: 12,
    borderRadius: 8,
    paddingLeft: 20,
    color: Colors.theme.black,
    backgroundColor: Colors.theme.tiny_gray,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonFollowing: {
    padding: 5,
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: Colors.theme.default,
  },
  textFollowing: {
    fontWeight: 'bold',
    paddingHorizontal: 5,
    color: Colors.theme.white,
  },
  viewOptions: {
    margin: 10,
    paddingVertical: 15,
    borderTopWidth: 0.5,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: Colors.theme.gray,
    justifyContent: 'space-between',
  },
  viewNumberPhotos: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonFilter: {
    padding: 5,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.theme.tiny_blue,
  },
  iconFilter: {
    padding: 4,
    paddingLeft: 5,
    marginRight: 10,
    paddingRight: 5,
    borderRadius: 30,
    backgroundColor: Colors.theme.default,
  },
  textFilter: {
    fontWeight: 'bold',
    color: Colors.theme.default,
  },
  iconOption: {
    marginHorizontal: 5
  },
  listImages: {
    marginBottom: 100
  },
  textNumberPhoto: {
    fontWeight: 'bold',
    paddingHorizontal: 5,
    color: Colors.theme.default,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textMenu: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.theme.gray,
  },
  separator: {
    height: 1,
    width: '80%',
    marginVertical: 30,
  },
})