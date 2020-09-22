import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    alignItems: "center",
    alignSelf: "center",
    paddingLeft: hp('5%'),
    paddingRight:hp('5%'),
    width:hp('100%'),
    
  },
  image: {
    marginTop: hp('3%'),
    width: hp('22%'),
    height: hp('22%'),
    resizeMode: "stretch",
    marginBottom: hp('6%'),
  },
  text: {
    marginBottom: hp('3%'),
    paddingLeft: hp('30%'),
    alignSelf: "flex-start",
    fontWeight: "bold",
    fontSize: hp('3.5%'),
    color: '#4b5c6b',
    
  },
});
