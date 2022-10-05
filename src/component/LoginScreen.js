import React, {useEffect, useState} from 'react';
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
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Style from '../styles/LoginScreenStyle';
import logo from '../assets/logo.png';
import insta from '../assets/instagram.png';
import google from '../assets/google.png';
import Footer from '../component/common/Footer';
import {connect} from 'react-redux';
import {
  setLoginUserName,
  setLoginPassword,
  loginUser,
  googleLogin,
} from '../actions/Authentication';
import {showMessage} from 'react-native-flash-message';

const LoginScreen = props => {
  const [instagramLogin, setinstagramLogin] = useState({});

  const navigation = useNavigation();

  useEffect(() => {
    GoogleSignin.configure({
      scopes: [],
      webClientId:
        '766872925954-prnsdq60jnevjr7sg3jeboqsuvbjkvnl.apps.googleusercontent.com',
      offlineAccess: true,
      hostedDomain: '',
      loginHint: '',
      forceConsentPrompt: true,
      accountName: '',
    });
  });

  const signIn = async () => {
    try {
      console.log('sign In');
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);

      if (userInfo !== undefined) {
        let obj = {
          id: userInfo.user.id,
          pic: userInfo.user.photo,
          user: userInfo.user.givenName,
          name: userInfo.user.name,
          email: userInfo.user.email,
          password: '1234',
          navigation: navigation,
        };
        props.googleLogin(obj);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    signIn();
  };

  const handleClickInsta = () => {
    instagramLogin.show();
  };

  const setIgToken = async data => {
    // AsyncStorage.setItem('response', 'LOG');
    // navigation.navigate('home');
    console.log('data', data);

    await axios
      .get(
        `https://graph.instagram.com/${data.user_id}?fields=username,email&access_token=${data.access_token}`,
      )
      .then(response => {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error.response);
      });
  };

  const login = () => {
    if (props.loginUserName !== '') {
      if (props.loginPassword !== '') {
        let obj = {
          name: props.loginUserName,
          pass: props.loginPassword,
          navigation: navigation,
        };
        props.loginUser(obj);
      } else {
        showMessage({
          message: 'OrangeHRM',
          description: 'Missing the password field.',
          type: 'warning',
          duration: 1000,
        });
      }
    } else {
      showMessage({
        message: 'OrangeHRM',
        description: 'Please type user name',
        type: 'danger',
        duration: 2000,
      });
    }
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
              props.setLoginUserName(text);
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
              props.setLoginPassword(text);
            }}
            style={Style.txtInput}
          />
        </View>

        <TouchableOpacity
          style={Style.btn}
          onPress={() => {
            login();
          }}>
          <Text style={Style.btnTxt}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={Style.signView}
          onPress={() => {
            navigation.navigate('Sign');
          }}>
          <Text style={Style.singTxt}>
            Don't have an account? <Text style={Style.singTxt1}>Sign Up</Text>
          </Text>
        </TouchableOpacity>

        <View style={Style.insterView}>
          <Text style={Style.insTxt}>Login with social media</Text>
          <View style={Style.insterBtnView}>
            <TouchableOpacity
              onPress={() => {
                handleClick();
              }}>
              <Image source={google} style={Style.instaLogo1} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                handleClickInsta();
              }}>
              <Image source={insta} style={Style.instaLogo} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Footer />

      <InstagramLogin
        ref={ref => setinstagramLogin(ref)}
        appId="513196987288707"
        appSecret="394e73051eeca1497ca904c46e01cb4d"
        redirectUrl="https://www.orangehrm.com/"
        incognito={false}
        scopes={[
          'user_profile',
          'user_media',
          'public_profile',
          'user_location',
          'user_photos',
          'user_gender',
          'user_birthday',
          'email',
        ]}
        onLoginSuccess={setIgToken}
        onLoginFailure={data => console.log(data)}
        language="en" //default is 'en' for english
      />
    </View>
  );
};

const mapStateToProps = state => {
  return {
    loginUserName: state.loading.loginUserName,
    loginPassword: state.loading.loginPassword,
  };
};

export default connect(mapStateToProps, {
  setLoginUserName,
  setLoginPassword,
  loginUser,
  googleLogin,
})(LoginScreen);
