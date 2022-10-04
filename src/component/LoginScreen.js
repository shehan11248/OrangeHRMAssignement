import React from 'react';
import {View, SafeAreaView, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = props => {
  const navigation = useNavigation();

  const handleClick = () => {
    navigation.navigate('Loading');
  };
  return (
    <View style={{backgroundColor: 'red', width: '100%', height: '100%'}}>
      <TouchableOpacity onPress={handleClick}>
        <Text>sss</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
