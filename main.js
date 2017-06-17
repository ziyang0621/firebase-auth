import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

class App extends React.Component {
  componentDidMount() {
    var config = {
       apiKey: "AIzaSyCtJu8bB9bsV5aORzCdCJcfAH5q15t6BWY",
       authDomain: "one-time-password-4314d.firebaseapp.com",
       databaseURL: "https://one-time-password-4314d.firebaseio.com",
       projectId: "one-time-password-4314d",
       storageBucket: "one-time-password-4314d.appspot.com",
       messagingSenderId: "68919858776"
     };
     firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm/>
        <SignInForm/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

Expo.registerRootComponent(App);
