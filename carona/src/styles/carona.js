import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",   
  },
  itens: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  topbar:{
    flex:1,
    marginTop: hp('1%'),
  },

  content: {
    borderColor: "#4b5c6b",
    borderRadius: 5,
    borderWidth: 1,
    padding: hp('1%'),
    alignSelf: "center",
    width: hp('48%'),
  },
  textContent:{
    color: "#4b5c6b",
    fontSize: hp('2%'),
    fontWeight:"700"
  },
  headerText: {
    marginTop: hp('1%'),
    fontSize: hp('2.3%'),
    color:"#4b5c6b",
    fontWeight: "700",
  },
  titleText: {
    color:"#4b5c6b",
    fontWeight: "700",
    marginTop: hp('1%'),
    marginBottom: hp('3%'),
    fontSize: hp('2.3%'),
  },
  button: {
    backgroundColor: "#6658f4",
    height: hp('6%'),
    width: hp('20%'),
    marginTop: hp('36%'),
    marginBottom: hp('15%'),
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    color: "#FFFFFF",
    fontSize: hp('2.3%'),
  },
});
