import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  AsyncStorage,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import InstagramLogin from 'react-native-instagram-login';
import axios from 'axios';
import CookieManager from '@react-native-community/cookies';
import Style from '../styles/LoginScreenStyle';
import logo from '../assets/logo.png';
import insta from '../assets/instagram.png';
import Footer from '../component/common/Footer';

const LoginScreen = props => {
  const [instagramLogin, setinstagramLogin] = useState({});

  const navigation = useNavigation();

  const handleClick = () => {
    instagramLogin.show();
  };

  const setIgToken = async data => {
    AsyncStorage.setItem('response', 'LOG');
    navigation.navigate('home');
    console.log('data', data);

    await axios
      .get(
        `https://graph.instagram.com/${data.user_id}?fields=id,username,email&access_token=${data.access_token}`,
      )
      .then(response => {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
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

        <TouchableOpacity
          style={Style.btn}
          onPress={() => {
            navigation.navigate('home');
          }}>
          <Text style={Style.btnTxt}>Login</Text>
        </TouchableOpacity>

        <View style={Style.insterView}>
          <Text style={Style.insTxt}>Login with Instagram</Text>
          <TouchableOpacity
            onPress={() => {
              handleClick();
            }}>
            <Image source={insta} style={Style.instaLogo} />
          </TouchableOpacity>
        </View>
      </View>

      <Footer />

      <InstagramLogin
        ref={ref => setinstagramLogin(ref)}
        appId="513196987288707"
        appSecret="394e73051eeca1497ca904c46e01cb4d"
        redirectUrl="https://www.orangehrm.com/"
        incognito={false}
        scopes={['user_profile', 'user_media', 'public_profile']}
        onLoginSuccess={setIgToken}
        onLoginFailure={data => console.log(data)}
        language="tr" //default is 'en' for english
      />
    </View>
  );
};

export default LoginScreen;
