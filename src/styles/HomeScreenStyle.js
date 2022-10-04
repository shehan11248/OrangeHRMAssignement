import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

module.exports = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    width: wp('100'),
    height: hp('100'),
    // paddingTop: hp('4'),
  },
  subView: {
    backgroundColor: '#fff',
    width: wp('100'),
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: hp('3'),
  },
  logo: {
    width: 120,
    height: 120,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  headerView: {
    backgroundColor: '#ff9e00',
    width: wp('100'),
    height: hp('12'),
    justifyContent: 'center',
    paddingTop: hp('4'),
    paddingLeft: wp('2'),
    // alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: hp('2'),
  },
  details: {
    fontSize: 16,
    // fontWeight: 'bold',
  },
  detailsView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('90'),
    height: hp('52'),
    backgroundColor: '#fff',
    elevation: 8,
    marginTop: hp('2'),
    borderRadius: 30,
    paddingTop: hp('2'),
    paddingBottom: hp('2'),
  },
  cardView: {
    width: wp('80'),
    // backgroundColor: 'red',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp('2'),
  },
  cardSubview: {
    width: wp('22'),
    // backgroundColor: '#fff',
  },
  cardSubview1: {
    width: wp('50'),
    // backgroundColor: '#fff',
  },
  btnView: {
    width: wp('50'),
    height: hp('6'),
    borderRadius: 18,
    backgroundColor: '#fff',
    elevation: 8,
    marginTop: hp('4'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTxt: {
    fontSize: 15,
    marginLeft: wp('3'),
    fontWeight: 'bold',
  },
  btnImage: {
    width: 30,
    height: 30,
  },
});
