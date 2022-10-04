import React, {useEffect} from 'react';
import {View, Image, TouchableOpacity, Text, AsyncStorage} from 'react-native';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Style from '../styles/HomeScreenStyle';

import proPic from '../assets/user.png';
import logout from '../assets/logout.png';
import Footer from './common/Footer';
import CookieManager from '@react-native-community/cookies';

const HomeScreen = props => {
  const navigation = useNavigation();

  const removeData = async () => {
    try {
      await AsyncStorage.removeItem('response');
      await AsyncStorage.clear();
      navigation.navigate('Login');
    } catch (error) {}
  };

  const onClear = () => {
    CookieManager.clearAll(true).then(res => {
      console.log(res);
      removeData();
      // this.setState({token: null});
    });
  };

  return (
    <View style={Style.mainContainer}>
      <View style={Style.headerView}>
        <Text style={Style.title}>Home</Text>
      </View>

      <View style={Style.subView}>
        <Image source={proPic} style={Style.logo} />
        <Text style={Style.name}>She11248</Text>

        <View style={Style.detailsView}>
          <View style={Style.cardView}>
            <View style={Style.cardSubview}>
              <Text style={Style.details}>Name</Text>
            </View>
            <Text style={Style.details}>:</Text>
            <View style={Style.cardSubview1}>
              <Text style={Style.details} numberOfLines={1}>
                Shehan Nimeshaka
              </Text>
            </View>
          </View>
          <View style={Style.cardView}>
            <View style={Style.cardSubview}>
              <Text style={Style.details}>Gender</Text>
            </View>
            <Text style={Style.details}>:</Text>
            <View style={Style.cardSubview1}>
              <Text style={Style.details}>Male</Text>
            </View>
          </View>
          <View style={Style.cardView}>
            <View style={Style.cardSubview}>
              <Text style={Style.details}>Age</Text>
            </View>
            <Text style={Style.details}>:</Text>
            <View style={Style.cardSubview1}>
              <Text style={Style.details}>25</Text>
            </View>
          </View>
          <View style={Style.cardView}>
            <View style={Style.cardSubview}>
              <Text style={Style.details}>Email</Text>
            </View>
            <Text style={Style.details}>:</Text>
            <View style={Style.cardSubview1}>
              <Text style={Style.details} numberOfLines={1}>
                snimeshaka@gmail.com
              </Text>
            </View>
          </View>
          <View style={Style.cardView}>
            <View style={Style.cardSubview}>
              <Text style={Style.details}>Location</Text>
            </View>
            <Text style={Style.details}>:</Text>
            <View style={Style.cardSubview1}>
              <Text style={Style.details} numberOfLines={1}>
                Horana
              </Text>
            </View>
          </View>

          <TouchableOpacity
            style={Style.btnView}
            onPress={() => {
              onClear();
            }}>
            <Image source={logout} style={Style.btnImage} />
            <Text style={Style.btnTxt}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Footer />
    </View>
  );
};

const mapStateToProps = state => {
  return {
    loadingIndicate: state.loading.loadingIndicate,
  };
};

export default connect(mapStateToProps, {})(HomeScreen);
