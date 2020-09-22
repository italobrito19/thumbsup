import {StyleSheet} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  separator: {
    borderBottomColor: "#4b5c6b",
    width: hp('48%'),
    marginBottom: hp('3%'),
    borderBottomWidth: 2,
  },
});
