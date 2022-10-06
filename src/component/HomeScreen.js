import React, {useEffect} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  AsyncStorage,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Style from '../styles/HomeScreenStyle';

import proPic from '../assets/user.png';
import logout from '../assets/logout.png';
import Footer from './common/Footer';
import CookieManager from '@react-native-community/cookies';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {getUserData} from '../actions/Authentication';

const HomeScreen = props => {
  const navigation = useNavigation();

  useEffect(() => {
    getData();
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
  }, []);

  const getData = async () => {
    let userid = await AsyncStorage.getItem('userId');
    props.getUserData(userid);
  };

  const removeData = async () => {
    try {
      if (props.userDAta.type === 'insta') {
        CookieManager.clearAll(true).then(res => {
          console.log(res);
          removeAction();
          // this.setState({token: null});
        });
      } else if (props.userDAta.type === 'google') {
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
        await AsyncStorage.removeItem('response');
        await AsyncStorage.clear();
        navigation.navigate('Login');
      } else {
        await AsyncStorage.removeItem('response');
        await AsyncStorage.clear();
        navigation.navigate('Login');
      }
    } catch (error) {}
  };

  const removeAction = async () => {
    await AsyncStorage.removeItem('response');
    await AsyncStorage.clear();
    navigation.navigate('Login');
  };

  const onClear = () => {
    removeData();
  };

  return (
    <View style={Style.mainContainer}>
      <View style={Style.headerView}>
        <Text style={Style.title}>Home</Text>
      </View>

      <View style={Style.subView}>
        <View style={Style.detailsView}>
          <Image
            source={
              props.userDAta.image === 'default'
                ? proPic
                : {uri: props.userDAta.image}
            }
            style={Style.logo}
          />
          <Text style={Style.name}> {props.userDAta.userName}</Text>

          <View style={Style.cardView}>
            <View style={Style.cardSubview}>
              <Text style={Style.details}>Name</Text>
            </View>
            <Text style={Style.details}>:</Text>
            <View style={Style.cardSubview1}>
              <Text style={Style.details} numberOfLines={1}>
                {props.userDAta.full_Name}
              </Text>
            </View>
          </View>

          <View style={Style.cardView}>
            <View style={Style.cardSubview}>
              <Text style={Style.details}>Email</Text>
            </View>
            <Text style={Style.details}>:</Text>
            <View style={Style.cardSubview1}>
              <Text style={Style.details} numberOfLines={1}>
                {props.userDAta.email}
              </Text>
            </View>
          </View>

          <TouchableOpacity
            style={Style.btnView}
            onPress={() => {
              Alert.alert(
                'Are you sure you want to logout?',
                '',
                [
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                  },
                  {
                    text: 'OK',
                    onPress: () => {
                      onClear();
                    },
                  },
                ],
                {cancelable: false},
              );
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
    userDAta: state.loading.userDAta,
  };
};

export default connect(mapStateToProps, {
  getUserData,
})(HomeScreen);
