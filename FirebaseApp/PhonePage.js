import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';

import auth from '@react-native-firebase/auth';

import LinearGradient from 'react-native-linear-gradient';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';

const PhonePage = ({navigation}) => {
  const [confirm, setConfirm] = useState(null);

  const [code, setCode] = useState('');
  const [PhoneFocus, setPhoneFocus] = useState(false);

  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
    }
  }
  if (!confirm) {
    return (
      <SafeAreaView>
        <Button
          title="Phone Number Sign In"
          onPress={() => signInWithPhoneNumber('+919858213728')}
        />
        <Input value={code} onChangeText={text => setCode(text)} />
        <Button title="Confirm Code" onPress={() => confirmCode()} />
      </SafeAreaView>
    );
  }

  return (
    <LinearGradient
      start={{x: 0.0, y: 0.25}}
      end={{x: 0.5, y: 1.0}}
      locations={[0, 0.3, 0.6]}
      colors={['pink', 'white', '#FCCBD5']}
      style={styles.lg}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Icon
            style={styles.phoneicon}
            name="phone"
            size={100}
            color="#23124A"></Icon>
        </View>
        <View>
          <Text style={styles.headerTxt}>Phone Login</Text>
        </View>
        <View style={styles.container2}>
          <View style={styles.PhoneStyle}>
            <Input
              keyboardType="numeric"
              style={styles.PhoneTxt}
              placeholder="Phone no: +91**********"
              onFocus={() => setPhoneFocus(true)}
              onBlur={() => setPhoneFocus(false)}
              inputContainerStyle={PhoneFocus ? styles.Focused : {}}></Input>
          </View>
          <View style={styles.Btncontainer}>
            <TouchableOpacity style={styles.BtnStyle}>
              <Text style={styles.BtnTxt}>Get OTP</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TextInput value={code} onChangeText={text => setCode(text)} />
        <Button title="Confirm Code" onPress={() => confirmCode()} />
        <View style={styles.footer}>
          <Text style={styles.footertxt}>Already have an Account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text style={styles.footertxt2}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  lg: {
    flex: 1,
  },

  header: {
    alignSelf: 'center',
    marginTop: 70,
  },
  headerTxt: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
  },
  container: {flex: 1},
  container2: {flex: 1, justifyContent: 'center'},
  PhoneStyle: {
    flex: 0.1,
    justifyContent: 'center',
    width: '75%',
    alignSelf: 'center',
    marginBottom: 10,
  },
  PhoneTxt: {
    borderRadius: 15,
    height: 60,
    fontSize: 17,
    padding: 15,
    backgroundColor: '#FCCBD5',
    marginBottom: 2,
  },
  Btncontainer: {},
  BtnStyle: {alignSelf: 'center', backgroundColor: '#23124A', borderRadius: 15},
  BtnTxt: {
    fontSize: 20,
    color: 'white',
    width: 290,
    textAlign: 'center',
    height: 30,
    padding: 2,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
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
    borderBottomColor: '#23124A',
  },
});
export default PhonePage;
