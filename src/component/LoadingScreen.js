import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const LoadingScreen = props => {
  const navigation = useNavigation();

  const handleClick = () => {
    navigation.navigate('Login');
  };

  return (
    <View
      style={{
        backgroundColor: 'blue',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={handleClick}>
        <Text>{props.loadingIndicate}</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    loadingIndicate: state.loading.loadingIndicate,
  };
};

export default connect(mapStateToProps, {})(LoadingScreen);
