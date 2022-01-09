import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  textDate: {
    fontSize: 16,
    marginBottom: 20,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  photo: {
    width: 120,
    height: 120
  },
  imageModal: {
    width: 300,
    height: 250
  },
  item: {
    flex: 1,
    margin: 4,
    width: 100,
    flexGrow: 1,
    height: 100,
    flexBasis: 0,
    marginBottom: 20,
    alignItems: "center",
  },
  itemEmpty: {
    backgroundColor: "transparent"
  },
  text: {
    color: Colors.theme.tiny_black
  },
  centeredView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalView: {
    margin: 20,
    padding: 35,
    elevation: 5,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2
    },
    borderRadius: 20,
    shadowOpacity: 0.25,
    alignItems: "flex-end",
    shadowColor: Colors.theme.black,
    backgroundColor: Colors.theme.white,
  },
  addCart: {
    backgroundColor: Colors.theme.default,
    width: 230,
    height: 70,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textCart: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.theme.white
  },
  price: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: 'bold'
  },
  button: {
    padding: 10,
    elevation: 2,
    borderRadius: 20,
  },
  buttonClose: {
    padding: 10,
    paddingRight: 15,
    position: 'absolute'
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.theme.default,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
})