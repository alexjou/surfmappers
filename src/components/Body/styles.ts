import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export default StyleSheet.create({
  container: {
    height: 300,
    width: '100%',
    marginVertical: 30,
    justifyContent: 'space-between',
    backgroundColor: Colors.theme.white,
  },
  textLocate: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.theme.default
  },
  viewDate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textDate: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.theme.gray,
  },
  imageView: {
    height: 200,
    width: '100%',
    borderRadius: 10
  },
  viewPagination: {
    width: '33%',
  },
  pagination: {
    width: 8,
    height: 8,
    borderRadius: 5,
    marginHorizontal: -10,
  },
  buttonShare: {
    marginLeft: 25
  },
  buttonCamera: {
    flexDirection: 'row'
  },
  iconCamera: {
    marginRight: 5
  },
  textUser: {
    fontWeight: 'bold'
  },
  iconOptions: {
    marginRight: 5,
    marginBottom: 5,
  },
  viewButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewInsideButtons: {
    width: '33%',
    flexDirection: 'row',
  },
  buttonIcon: {
    marginLeft: 15
  },
  viewCarousel: {
    padding: 5,
    width: '100%',
    alignItems: 'center',
  },
  imageItem: {
    width: '100%',
    height: '100%',
    borderRadius: 2
  }
})