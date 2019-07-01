import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HelloWorldApp from './components/HelloWorldApp';
import Bananas from './components/Bananas';
import LotsOfGrettings from './components/LotsOfGrettings';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      {/* <HelloWorldApp></HelloWorldApp> */}
      {/* <Bananas></Bananas> */}
      <LotsOfGrettings></LotsOfGrettings>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
