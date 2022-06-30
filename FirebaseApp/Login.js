import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';


import CheckBox from '@react-native-community/checkbox';

import Icon2 from 'react-native-vector-icons/AntDesign';
import {Input, Icon} from 'react-native-elements';
import KeyboardAvoidingWrapper from './KeyboardAvoidingWrapper';

import auth from '@react-native-firebase/auth';
import {
  LoginManager,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';

import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native';

const LoginPage = ({navigation}) => {
  useEffect(() => {
    GoogleSignin.configure();
  }, []);

  ///////////////////////////Facebook-Auth///////////////////////////////////
  const fbLogin = resCallback => {
    LoginManager.logOut();
    return LoginManager.logInWithPermissions(['email', 'public_profile']).then(
      result => {
        console.log('fb result==>>>>>>', result);
        if (
          result.declinedPermissions &&
          result.declinedPermissions.includes('email')
        ) {
          resCallback({message: 'Email is required'});
        }
        if (result.isCancelled) {
          console.log('error');
        } else {
          const infoRequest = new GraphRequest(
            '/me?fields=email,name,picture',
            null,
            resCallback,
          );
          new GraphRequestManager().addRequest(infoRequest).start();
        }
      },
      function (error) {
        console.log('login fail with error: ' + error);
      },
    );
  };
  const onFbLogin = async () => {
    try {
      await fbLogin(_responseInfoCallBack);
    } catch (error) {
      console.log('error raised', error);
    }
  };

  const _responseInfoCallBack = async (error, result) => {
    if (error) {
      console.log('error top', error);
      return;
    } else {
      const userData = result.then(navigation.push('Home'));

      console.log('fb data+++++', userData);
    }
  };

  ///////////////////////////////////google-Auth//////////////////////////////
  const googleLogIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      navigation.push('Home');
      console.log('user info', userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log(error);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log(error);
      } else {
        console.log(error);
        // some other error happened
      }
    }
  };

  ////////////////////////////////firebase////////////////////////////////////
  userSignIn = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.push('Home');
        console.log('signed in!');
        alert('SignedIn');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  ////////////////////////////////useState////////////////////////////////////
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [check, setCheck] = useState(false);

  // ///////////////////////////////Dismiss Keyboard/////////////////////////////
  // const DismissKeyboard = ({children}) => (
  //   <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
  //     {children}
  //   </TouchableWithoutFeedback>
  // );

  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <LinearGradient
        start={{x: 0.0, y: 0.25}}
        end={{x: 0.5, y: 1.0}}
        locations={[0, 0.3, 0.6]}
        colors={['pink', 'white', '#FCCBD5']}
        style={styles.lg}>
        <SafeAreaView style={styles.container}>
          <ScrollView>
          <KeyboardAvoidingWrapper>
            <View style={styles.container2}>
              <View style={styles.headerStyle}>
                <Text style={styles.headerTxt}>Sign In</Text>
              </View>
              <View style={styles.inputStyle}>
                <Input
                  onChangeText={value => setEmail(value)}
                  style={styles.Email}
                  onFocus={() => setEmailFocus(true)}
                  onBlur={() => setEmailFocus(false)}
                  placeholder="Username or email"
                  inputContainerStyle={
                    emailFocus ? styles.Focused : {}
                  }></Input>
                <Input
                  onChangeText={value => setPassword(value)}
                  style={styles.Password}
                  secureTextEntry={true}
                  onFocus={() => setPasswordFocus(true)}
                  onBlur={() => setPasswordFocus(false)}
                  placeholder="Password"
                  inputContainerStyle={
                    passwordFocus ? styles.Focused : {}
                  }></Input>
              </View>
              <View style={styles.TickContainer}>
                <CheckBox
                  disabled={false}
                  value={check}
                  onValueChange={newValue => setCheck(newValue)}
                  style={styles.CheckBox}
                />
                <Text style={styles.remember}>Remember me</Text>
              </View>
              <View style={styles.btnStyle}>
                <TouchableOpacity
                  onPress={() => userSignIn()}
                  style={styles.touchStyle}>
                  <Text style={styles.btnText}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.forgetTxt}>Forget Password?</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.borderContainer}>
                <View style={styles.borderStyle1} />
                <View>
                  <Text style={styles.borderText}>Or</Text>
                </View>
                <View style={styles.borderStyle2} />
              </View>
              <View style={styles.linkContainer}>
                <TouchableOpacity
                  onPress={() => googleLogIn()}
                  style={styles.IconContainer1}>
                  <Icon2
                    style={styles.goicon}
                    name="google"
                    size={26}
                    color="#23124A"
                  />
                  <Text style={styles.Googletxt}>Continue With Google</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={onFbLogin}
                  style={styles.IconContainer}>
                  <Icon
                    style={styles.fbicon}
                    name="facebook"
                    type="facebook"
                    color="#23124A"
                    size={26}
                  />
                  <Text style={styles.FbTxt}>Continue With Facebook</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity
              onPress={() => {navigation.push("PhonePage")}}
              style={styles.IconContainer1}>
              <Icon2
                style={styles.phoneicon}
                name="phone"
                size={26}
                color="#23124A"
              />
              <Text style={styles.phonetxt}>Login using Phone number</Text>
            </TouchableOpacity> */}
              </View>
              <View style={styles.footer}>
                <Text style={styles.footerTxt}>Don't have an account?</Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.push('SignUp');
                  }}>
                  <Text style={styles.Signfooter}>Sign Up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingWrapper>
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    flex: 1,
  },
  lg: {
    flex: 1,
  },
  headerStyle: {
    flex: 0.3,
  },
  headerTxt: {
    fontSize: 30,
    marginTop: 100,
    marginLeft: 35,
    padding:20,
    fontWeight: 'bold',
  },
  inputStyle: {
    flex: 0.2,
    width: '80%',
    marginLeft:40,
    marginTop:5
  },
  Email: {
    borderRadius: 15,
    height: 50,
    fontSize: 15,
    padding: 15,
    backgroundColor: '#FCCBD5',
  },
  Password: {
    backgroundColor: '#FCCBD5',
    borderRadius: 15,
    height: 50,
    fontSize: 15,
    padding: 15,
  },
  TickContainer: {
    flexDirection: 'row',
    marginLeft: 50,
  },
  CheckBox: {
    marginBottom: 10,
  },
  remember: {
    alignSelf: 'center',
    color: '#23124A',
    marginBottom: 10,
    marginLeft: 5,
  },
  btnStyle: {
    flex: 0.13,
    alignItems: 'center',
  },
  
  touchStyle: {
    backgroundColor: '#23124A',
    borderRadius: 15,
  },
  btnText: {
    textAlign: 'center',
    paddingTop: 14,
    color: 'white',
    fontSize: 16,
    width: 310,
    height: 50,
    fontWeight: 'bold',
  },
  forgetTxt: {
    fontSize: 13,
    marginTop: 5,
    color: '#23124A',
  },
  borderContainer: {
    marginTop:40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  borderStyle1: {
    flex: 1,
    height: 1,
    marginLeft: 50,
    backgroundColor: 'black',
  },
  borderText: {
    width: 50,
    textAlign: 'center',
  },
  borderStyle2: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
    marginRight: 55,
  },
  linkContainer: {
    flex: 0.3,
    marginTop:60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Googletxt: {
    color: '#23124A',
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 40,
    paddingLeft:10,
    width: '50%',
  },
  FbTxt: {
    color: '#23124A',
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 40,
    paddingLeft:10,
    width: '50%',
  },
  IconContainer1: {
    flexDirection: 'row',
    backgroundColor: '#FDD4DD',
    borderRadius: 13,
    justifyContent:'center',
    alignItems:'center',
    height: 50,
    marginBottom: 15,
  },
  IconContainer: {
    flexDirection: 'row',
    backgroundColor: '#FDD4DD',
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 13,
    height: 50,
  },
  goicon: {
    marginLeft: 29,
  },
  fbicon: {
    marginLeft: 30,
  },

  footer: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop:80,
  },
  footerTxt: {
    textAlign: 'center',
    marginTop: 40,
    color: 'black',
  },
  Signfooter: {
    textAlign: 'center',
    marginTop: 40,
    fontWeight: 'bold',
    color: '#23124A',
  },
  Focused: {
    borderColor: '#23124A',
    borderWidth: 1.5,
    borderRadius: 15,
  },
});
export default LoginPage;
