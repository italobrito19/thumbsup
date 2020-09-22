import {StyleSheet} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  container:{
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  input: {
    height: hp('5%'),
    width:  hp('40%'),
    borderColor: "#4b5c6b",
    borderRadius: 5,
    borderWidth: 1,
    margin: hp('1%'),
    paddingLeft: hp('1%'),
  },
  image: {
    width: hp('30%'),
    height: hp('20%'),
    resizeMode: "stretch",
    marginBottom: hp('8%'),
  },
  button: {
    backgroundColor: "#6658f4",
    height: hp('5%'),
    width: hp('22%'),
    marginTop: hp('2%'),
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#FFFFFF",
  },
});
