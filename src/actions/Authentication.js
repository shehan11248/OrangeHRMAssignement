import {showMessage} from 'react-native-flash-message';
import firestore from '@react-native-firebase/firestore';
import {AsyncStorage} from 'react-native';

export const setUserName = text => async dispatch => {
  dispatch({
    type: 'SET_UER_NAME',
    payload: text,
  });
};
export const setLoginUserName = text => async dispatch => {
  dispatch({
    type: 'SET_LOGIN_UER_NAME',
    payload: text,
  });
};

export const setFullName = text => async dispatch => {
  dispatch({
    type: 'SET_FULL_NAME',
    payload: text,
  });
};

export const setEmail = text => async dispatch => {
  dispatch({
    type: 'SET_EMAIL',
    payload: text,
  });
};

export const setPassword = text => async dispatch => {
  dispatch({
    type: 'SET_PASSWORD',
    payload: text,
  });
};

export const setLoginPassword = text => async dispatch => {
  dispatch({
    type: 'SET_LOGIN_PASSWORD',
    payload: text,
  });
};

export const setConfirmPassword = text => async dispatch => {
  dispatch({
    type: 'SET_CONFIRM_PASSWORD',
    payload: text,
  });
};

export const setPic = text => async dispatch => {
  dispatch({
    type: 'SET_PIC',
    payload: text,
  });
};

export const registration = obj => async dispatch => {
  let id = firestore().collection('UserTable').doc().id;
  console.log(obj.name, new Date().toISOString());
  firestore()
    .collection('UserTable')
    .add({
      userId: id,
      full_Name: obj.name,
      userName: obj.user,
      email: obj.email,
      image: obj.pic,
      password: obj.password,
      createAt: new Date().toISOString(),
    })
    .then(() => {
      showMessage({
        message: 'OrangeHRM',
        description: 'Registration Successfully',
        type: 'success',
        duration: 1000,
      });

      obj.navigation.navigate('Login');
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const loginUser = obj => async dispatch => {
  firestore()
    .collection('UserTable')
    // Filter results
    .where('userName', '==', obj.name)
    .get()
    .then(querySnapshot => {
      if (querySnapshot.docs.length !== 0) {
        querySnapshot.forEach(change => {
          let data: any = change.data();
          console.log(data);

          if (obj.pass === data.password) {
            AsyncStorage.setItem('response', 'LOG');
            AsyncStorage.setItem('userId', data.userId);
            let details = {
              userId: data.id,
              full_Name: data.name,
              userName: data.user,
              email: data.email,
              image: data.pic,
              password: data.password,
            };
            obj.navigation.navigate('home');
          } else {
            showMessage({
              message: 'OrangeHRM',
              description: 'Invalid password',
              type: 'danger',
              duration: 2000,
            });
          }
        });
      } else {
        showMessage({
          message: 'OrangeHRM',
          description: 'Invalid user name',
          type: 'danger',
          duration: 2000,
        });
      }
    });
};

export const googleLogin = obj => async dispatch => {
  firestore()
    .collection('UserTable')
    // Filter results
    .where('email', '==', obj.email)
    .get()
    .then(querySnapshot => {
      if (querySnapshot.docs.length !== 0) {
        querySnapshot.forEach(change => {
          let data: any = change.data();
          console.log(data);
          //
          AsyncStorage.setItem('response', 'LOG');
          AsyncStorage.setItem('userId', data.userId);

          obj.navigation.navigate('home');
        });
      } else {
        firestore()
          .collection('UserTable')
          .add({
            userId: obj.id,
            full_Name: obj.name,
            userName: obj.user,
            email: obj.email,
            image: obj.pic,
            password: obj.password,
            createAt: new Date().toISOString(),
          })
          .then(() => {
            firestore()
              .collection('UserTable')
              // Filter results
              .where('userId', '==', obj.id)
              .get()
              .then(querySnapshot => {
                if (querySnapshot.docs.length !== 0) {
                  querySnapshot.forEach(change => {
                    let data: any = change.data();
                    console.log(data);

                    if (obj.password === data.password) {
                      AsyncStorage.setItem('response', 'LOG');
                      AsyncStorage.setItem('userId', data.userId);
                      let details = {
                        userId: data.id,
                        full_Name: data.name,
                        userName: data.user,
                        email: data.email,
                        image: data.pic,
                        password: data.password,
                      };
                      obj.navigation.navigate('home');
                    } else {
                      showMessage({
                        message: 'OrangeHRM',
                        description: 'Invalid password',
                        type: 'danger',
                        duration: 2000,
                      });
                    }
                  });
                } else {
                  showMessage({
                    message: 'OrangeHRM',
                    description: 'Invalid user name',
                    type: 'danger',
                    duration: 2000,
                  });
                }
              });
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    });
};

export const getUserData = id => async dispatch => {
  firestore()
    .collection('UserTable')
    // Filter results
    .where('userId', '==', id)
    .get()
    .then(querySnapshot => {
      if (querySnapshot.docs.length !== 0) {
        querySnapshot.forEach(change => {
          let data: any = change.data();
          console.log(data);
          dispatch({
            type: 'SET_USER_DATA',
            payload: data,
          });
        });
      } else {
        showMessage({
          message: 'OrangeHRM',
          description: 'System error',
          type: 'danger',
          duration: 2000,
        });
      }
    });
};
