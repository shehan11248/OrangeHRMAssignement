import React, {useEffect} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  AsyncStorage,
  PermissionsAndroid,
} from 'react-native';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Style from '../styles/LoadingScreenStyle';
import {getUserData} from '../actions/Authentication';

import logo from '../assets/logo.png';

const LoadingScreen = props => {
  const navigation = useNavigation();

  useEffect(() => {
    requestCameraPermission();
    naviagte();
  });

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.requestMultiple(
        [
          PermissionsAndroid.PERMISSIONS.CAMERA,
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        ],
        {
          title: 'Cool Photo App Camera',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const naviagte = async () => {
    let value = await AsyncStorage.getItem('response');
    let userid = await AsyncStorage.getItem('userId');
    setTimeout(() => {
      if (value === 'LOG') {
        props.getUserData(userid);
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

export default connect(mapStateToProps, {
  getUserData,
})(LoadingScreen);
