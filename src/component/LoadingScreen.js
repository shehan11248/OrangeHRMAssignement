import React, {useEffect} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Style from '../styles/LoadingScreenStyle';

import logo from '../assets/logo.png';

const LoadingScreen = props => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      handleClick();
    }, 2000);
  });

  const handleClick = () => {
    navigation.navigate('Login');
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
