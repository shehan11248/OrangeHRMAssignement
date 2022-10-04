import React from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  Linking,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Style from '../styles/LoginScreenStyle';
import logo from '../assets/logo.png';
import insta from '../assets/instagram.png';

const LoginScreen = props => {
  const navigation = useNavigation();

  const handleClick = () => {
    navigation.navigate('Loading');
  };
  return (
    <View style={Style.mainContainer}>
      <View style={Style.headerView}>
        <Image source={logo} style={Style.logo} />
      </View>
      <View style={Style.titleView}>
        <Text style={Style.title}>Login</Text>
      </View>
      <View style={Style.formView}>
        <View style={Style.textInputView}>
          <TextInput
            allowFontScaling={false}
            placeholder={'User Name'}
            placeholderTextColor={'gray'}
            onChangeText={text => {
              this.validate(text);
            }}
            onEndEditing={() => {
              this.setState({
                validated: true,
              });
            }}
            style={Style.txtInput}
          />
        </View>

        <View style={Style.textInputView}>
          <TextInput
            allowFontScaling={false}
            placeholder={'Password'}
            secureTextEntry={true}
            placeholderTextColor={'gray'}
            onChangeText={text => {
              this.validate(text);
            }}
            onEndEditing={() => {
              this.setState({
                validated: true,
              });
            }}
            style={Style.txtInput}
          />
        </View>

        <View style={Style.btn}>
          <Text style={Style.btnTxt}>Login</Text>
        </View>

        <View style={Style.insterView}>
          <Text style={Style.insTxt}>Login with Instagram</Text>
          <Image source={insta} style={Style.instaLogo} />
        </View>
      </View>

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
    </View>
  );
};

export default LoginScreen;
