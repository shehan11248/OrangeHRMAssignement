import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

module.exports = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#ff9e00',
    width: wp('100'),
    height: hp('100'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 250,
    height: 80,
  },
});
