import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import {Button} from 'react-native-elements';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';

import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const Home = ({navigation}) => {
  signOut = () => {
    auth()
      .signOut()
      .then(() => {
        navigation.push('Login');
        console.log('User signed out!');
      });
    alert('User Signed out');
  };
  signOut = async () => {
    try {
      await GoogleSignin.signOut();
      alert('User Signed out');
      // setUser(null); // Remember to remove the user from your app's state as well
      navigation.push('Login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <LinearGradient
      start={{x: 0.0, y: 0.25}}
      end={{x: 0.5, y: 1.0}}
      locations={[0, 0.3, 0.6]}
      colors={['pink', 'white', '#FCCBD5']}
      style={styles.lg}>
      <SafeAreaView style={styles.containter}>
        <View style={styles.containter2}>
          <TouchableOpacity
            onPress={() => {
              navigation.push('Animation2');
            }}
            style={styles.Anim1}>
            <Text style={{color: '#23124A'}}>Animation 1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.push('Animation3');
            }}
            style={styles.Anim2}>
            <Text style={{color: '#23124A'}}>Animation 2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.push('Animation4');
            }}
            style={styles.Anim3}>
            <Text style={{color: '#23124A'}}>Animation 3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.push('FadeInOutAnimation');
            }}
            style={styles.Anim4}>
            <Text style={{color: '#23124A'}}>Animation 4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.push('Charts');
            }}
            style={styles.charts}>
            <Text style={{color: '#23124A'}}>Pie Chart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signOut} onPress={() => signOut()}>
            <Text style={{color: 'white'}}>Sign Out</Text>
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

  containter: {
    flex: 1,
  },
  containter2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  Anim1: {
    margin: 4,
    backgroundColor: '#FCCBD5',
    width: '75%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  Anim2: {
    margin: 4,
    backgroundColor: '#FCCBD5',
    width: '75%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  Anim3: {
    margin: 4,
    backgroundColor: '#FCCBD5',
    width: '75%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  Anim4: {
    margin: 4,
    backgroundColor: '#FCCBD5',
    width: '75%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  charts: {
    margin: 4,
    backgroundColor: '#FCCBD5',
    width: '75%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  signOut: {
    margin: 4,
    backgroundColor: '#23124A',
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },
});
export default Home;
