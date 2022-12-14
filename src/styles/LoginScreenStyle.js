import {StyleSheet, StatusBar} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

module.exports = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    width: wp('100'),
    height: hp('100'),
    paddingTop: hp('6'),
  },
  headerView: {
    // backgroundColor: 'red',
    width: wp('100'),
    height: hp('25'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleView: {
    // backgroundColor: 'blue',
    width: wp('100'),
    height: hp('10'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  formView: {
    // backgroundColor: 'blue',
    width: wp('100'),
    paddingTop: hp('2'),
    paddingBottom: hp('2'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputView: {
    width: wp('70'),
    height: hp('6'),
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    elevation: 8,
    paddingLeft: wp('2'),
    marginBottom: hp('2'),
    justifyContent: 'center',
  },
  txtInput: {
    width: wp('60'),
    height: hp('6'),
    fontSize: 15,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  logo: {
    width: 250,
    height: 80,
  },
  user: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: hp('3'),
  },
  instaLogo: {
    width: 50,
    height: 50,
    marginTop: hp('1'),
    marginLeft: wp('4'),
  },
  instaLogo1: {
    width: 48,
    height: 48,
    marginTop: hp('1'),
  },
  btn: {
    width: wp('50'),
    height: hp('6'),
    backgroundColor: '#ff9e00',
    borderRadius: 18,
    marginTop: hp('2'),
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
  },
  insterView: {
    width: wp('100'),
    paddingTop: hp('2'),
    paddingBottom: hp('2'),
    // backgroundColor: '#ff9e00',
    marginTop: hp('2'),
    justifyContent: 'center',
    alignItems: 'center',
  },

  signView: {
    width: wp('100'),
    paddingTop: hp('2'),
    paddingBottom: hp('2'),
    // backgroundColor: '#ff9e00',
    marginTop: hp('2'),
    justifyContent: 'center',
    alignItems: 'center',
  },

  insterBtnView: {
    width: wp('100'),
    // backgroundColor: '#ff9e00',
    // marginTop: hp('2'),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  btnTxt: {
    fontSize: 18,
    color: '#000',
  },
  insTxt: {
    fontSize: 15,
    color: '#000',
  },

  singTxt: {
    fontSize: 14,
    color: '#000',
  },
  singTxt1: {
    fontSize: 14,
    color: '#4FC5BA',
  },
  footerTxt: {
    fontSize: 12,
    color: '#000',
  },
  footer: {
    width: wp('100'),
    height: hp('8s'),
    // backgroundColor: 'red',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerView1: {
    // backgroundColor: 'red',
    width: wp('100'),
    height: hp('15'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer1: {
    backgroundColor: '#fff',
    width: wp('100'),
    height: hp('100'),
    paddingTop: hp('5'),
  },
});
