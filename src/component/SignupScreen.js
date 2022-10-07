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
import Style from '../styles/LoginScreenStyle';
import logo from '../assets/user.png';
import Footer from '../component/common/Footer';
import {showMessage} from 'react-native-flash-message';
import {launchCamera} from 'react-native-image-picker';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {connect} from 'react-redux';
import {
  setUserName,
  setFullName,
  setEmail,
  setPassword,
  setConfirmPassword,
  setPic,
  registration,
} from '../actions/Authentication';

const SignupScreen = props => {
  const [validate, setvalidate] = useState(false);

  const navigation = useNavigation();

  const userRegister = () => {
    if (props.userName !== '') {
      if (props.fullName !== '') {
        if (props.email !== '' && validate) {
          if (props.password !== '') {
            if (props.confirmPassword !== '') {
              if (props.password === props.confirmPassword) {
                let obj = {
                  pic: props.pic,
                  user: props.userName,
                  name: props.fullName,
                  email: props.email,
                  password: props.password,
                  navigation: navigation,
                  type: 'normal',
                };
                props.registration(obj);
              } else {
                showMessage({
                  message: 'OrangeHRM',
                  description:
                    'The password and the confirm password do not match.',
                  type: 'warning',
                  duration: 1000,
                });
              }
            } else {
              showMessage({
                message: 'OrangeHRM',
                description: 'Missing the confirmation password field.',
                type: 'warning',
                duration: 1000,
              });
            }
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
            description: 'Please type valid email',
            type: 'danger',
            duration: 2000,
          });
        }
      } else {
        showMessage({
          message: 'OrangeHRM',
          description: 'Please type Full name',
          type: 'danger',
          duration: 2000,
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

  const validateEmail = text => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      setvalidate(false);
      return false;
    } else {
      setvalidate(true);
      props.setEmail(text);
    }
  };

  const _pickImage = async () => {
    var options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      maxWidth: 500,
      maxHeight: 500,
      quality: 0.5,
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        console.log(response);
        // this.setState({image: response.uri});
        // this.setState({imageName: response.fileName});
        uploadeImage(response);
      }
    });
  };

  const uploadeImage = async image => {
    var fileName = image.fileName;
    let fileUri = image.uri;
    const uploadTask = storage().ref(`/images/${fileName}`).putFile(fileUri);

    await uploadTask.on(
      'state_changed',
      taskSnapshot => {
        // console.log(snapShot)
        // console.log(snapShot)
        console.log(
          `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
        );
        console.log(
          parseInt(
            (taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) * 100,
          ),
        );
        // this.props.indicateDeatils(
        //   parseInt(
        //     (taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) * 100,
        //   ),
        // );
      },
      err => {
        console.log(err);
      },
      () => {
        storage()
          .ref('images')
          .child(fileName)
          .getDownloadURL()
          .then(fireBaseUrl => {
            console.log(fireBaseUrl);
            props.setPic(fireBaseUrl);
          });
      },
    );
  };

  return (
    <View style={Style.mainContainer}>
      <View style={Style.titleView}>
        <Text style={Style.title}>Sign Up</Text>
      </View>
      <View style={Style.formView}>
        <TouchableOpacity
          onPress={() => {
            _pickImage();
          }}>
          <Image
            source={props.pic === 'default' ? logo : {uri: props.pic}}
            style={Style.user}
          />
        </TouchableOpacity>
        <View style={Style.textInputView}>
          <TextInput
            allowFontScaling={false}
            placeholder={'User Name'}
            placeholderTextColor={'gray'}
            onChangeText={text => {
              props.setUserName(text);
            }}
            style={Style.txtInput}
          />
        </View>

        <View style={Style.textInputView}>
          <TextInput
            allowFontScaling={false}
            placeholder={'Full name'}
            placeholderTextColor={'gray'}
            onChangeText={text => {
              props.setFullName(text);
            }}
            style={Style.txtInput}
          />
        </View>

        <View style={Style.textInputView}>
          <TextInput
            allowFontScaling={false}
            placeholder={'Email'}
            placeholderTextColor={'gray'}
            onChangeText={text => {
              validateEmail(text);
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
              props.setPassword(text);
            }}
            style={Style.txtInput}
          />
        </View>

        <View style={Style.textInputView}>
          <TextInput
            allowFontScaling={false}
            placeholder={'Confirm Password'}
            secureTextEntry={true}
            placeholderTextColor={'gray'}
            onChangeText={text => {
              props.setConfirmPassword(text);
            }}
            style={Style.txtInput}
          />
        </View>

        <TouchableOpacity
          style={Style.btn}
          onPress={() => {
            userRegister();
          }}>
          <Text style={Style.btnTxt}>Sign up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={Style.signView}
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text style={Style.singTxt}>
            If exist an account? <Text style={Style.singTxt1}>Sign In</Text>
          </Text>
        </TouchableOpacity>
      </View>

      <Footer />
    </View>
  );
};

const mapStateToProps = state => {
  return {
    loadingIndicate: state.loading.loadingIndicate,
    userName: state.loading.userName,
    fullName: state.loading.fullName,
    email: state.loading.email,
    password: state.loading.password,
    confirmPassword: state.loading.confirmPassword,
    pic: state.loading.pic,
  };
};

export default connect(mapStateToProps, {
  setUserName,
  setFullName,
  setEmail,
  setPassword,
  setConfirmPassword,
  setPic,
  registration,
})(SignupScreen);
