import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {Input} from 'react-native-elements';
import CheckBox from '@react-native-community/checkbox';
import auth from '@react-native-firebase/auth';
import LinearGradient from 'react-native-linear-gradient';
import KeyboardAvoidingWrapper from './KeyboardAvoidingWrapper';
import { ScrollView } from 'react-native';

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  setSignUp = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        navigation.push('Login');
        console.log('User account created');
        alert('user created');
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

  const [userFocus, setUserFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [check, setCheck] = useState(false);

  return (
    <LinearGradient
      start={{x: 0.0, y: 0.25}}
      end={{x: 0.5, y: 1.0}}
      locations={[0, 0.3, 0.6]}
      colors={['pink', 'white', '#FCCBD5']}
      style={styles.lg}>
      <SafeAreaView style={styles.container}>
        <ScrollView>
        <View style={{flex:1}}>
          <KeyboardAvoidingWrapper>
            <View style={styles.container2}>
              <View style={styles.headerStyle}>
                <Text style={styles.headerTxt}>Create New Account</Text>
              </View>
              <View style={styles.inputStyle}>
                <Input
                  style={styles.Username}
                  placeholder="Name"
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
                  inputContainerStyle={userFocus ? styles.Focused : {}}></Input>
                <Input
                  onChangeText={value => setEmail(value)}
                  style={styles.Emailid}
                  onFocus={() => setEmailFocus(true)}
                  onBlur={() => setEmailFocus(false)}
                  placeholder="Email"
                  inputContainerStyle={
                    emailFocus ? styles.Focused : {}
                  }></Input>
                <Input
                  onChangeText={value => setPassword(value)}
                  style={styles.Password}
                  placeholder="Password"
                  secureTextEntry={true}
                  onFocus={() => setPasswordFocus(true)}
                  onBlur={() => setPasswordFocus(false)}
                  inputContainerStyle={
                    passwordFocus ? styles.Focused : {}
                  }></Input>
              </View>
              <View style={styles.Tickcontainer}>
                <CheckBox
                  disabled={false}
                  value={check}
                  onValueChange={newValue => setCheck(newValue)}
                  style={styles.CheckBox}
                />
                <Text style={styles.checkTxt}>I agree with</Text>
                <TouchableOpacity>
                  <Text style={styles.TCtext}> Terms & Conditions</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.BtnStyle}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Login');
                  }}
                  style={styles.Touchstyle}>
                  <Text onPress={() => setSignUp()} style={styles.TouchTxt}>
                    Create Account
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.footer}>
                <Text style={styles.footertxt}>Already have an Account?</Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Login');
                  }}>
                  <Text style={styles.footertxt2}>Sign In</Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingWrapper>
        </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  lg: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  container2: {
    flex: 1,
  },
  headerStyle: {
    flex: 0.2,
  },
  headerTxt: {
    fontSize: 30,
    marginTop: 123,
    marginLeft: 50,
    fontWeight: 'bold',
  },
  inputStyle: {
    flex: 0.3,
    width: '80%',
    marginLeft: 40,
    marginTop: 50,
  },
  Username: {
    height: 50,
    fontSize: 15,
    padding: 15,
    backgroundColor: '#FCCBD5',
    borderRadius: 15,
  },
  Emailid: {
    height: 50,
    fontSize: 15,
    padding: 15,
    backgroundColor: '#FCCBD5',
    borderRadius: 15,
  },
  Password: {
    height: 50,
    fontSize: 15,
    padding: 15,
    backgroundColor: '#FCCBD5',
    borderRadius: 15,
  },
  Tickcontainer: {
    flex: 0.1,
    flexDirection: 'row',
    marginLeft: 45,
  },
  TCtext: {
    color: '#23124A',
    fontWeight: 'bold',
    marginTop: 6,
  },
  checkTxt: {
    marginLeft: 5,
    marginTop: 6,
  },
  BtnStyle: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Touchstyle: {
    backgroundColor: '#23124A',
    borderRadius: 15,
    marginTop:20,
  },
  TouchTxt: {
    textAlign: 'center',
    paddingTop: 14,
    color: 'white',
    fontSize: 16,
    width: 310,
    height: 50,
    fontWeight: 'bold',
  },
  footer: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop:126
  },
  footertxt: {
    textAlign: 'center',
    marginTop: 134,
  },
  footertxt2: {
    textAlign: 'center',
    marginTop: 134,
    fontWeight: 'bold',
    color: '#23124A',
  },
  Focused: {
    borderColor: '#23124A',
    borderWidth: 1.5,
    borderRadius: 15,
  },
});
export default SignUp;
