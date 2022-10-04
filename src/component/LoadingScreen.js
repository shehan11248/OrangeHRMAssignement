import React, {useEffect} from 'react';
import {View, Image, TouchableOpacity, AsyncStorage} from 'react-native';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Style from '../styles/LoadingScreenStyle';

import logo from '../assets/logo.png';

const LoadingScreen = props => {
  const navigation = useNavigation();

  useEffect(() => {
    naviagte();
  });

  const naviagte = async () => {
    let value = await AsyncStorage.getItem('response');
    setTimeout(() => {
      if (value === 'LOG') {
        navigation.navigate('home');
      } else {
        navigation.navigate('Login');
      }
    }, 2000);
  };

  return (
    <View style={Style.mainContainer}>
      <Image source={logo} style={Style.logo} />
    </View>
  );
};

const mapStateToProps = state => {
  return {
    loadingIndicate: state.loading.loadingIndicate,
  };
};

export default connect(mapStateToProps, {})(LoadingScreen);
