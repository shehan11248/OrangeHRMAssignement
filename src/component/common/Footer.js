import React, {useEffect} from 'react';
import {View, Image, TouchableOpacity, Text, Linking} from 'react-native';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Style from '../../styles/LoginScreenStyle';

const Footer = props => {
  const navigation = useNavigation();

  const handleClick = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={Style.footer}>
      <Text style={Style.footerTxt}>
        Copyright @ 2022 .All Rights Reserved.
      </Text>
      <Text style={Style.footerTxt}>
        Designed by{' '}
        <Text
          onPress={() => {
            Linking.openURL('https://www.orangehrm.com/');
          }}
          style={{color: '#4FC5BA'}}>
          OrangeHRM
        </Text>
      </Text>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    loadingIndicate: state.loading.loadingIndicate,
  };
};

export default connect(mapStateToProps, {})(Footer);
