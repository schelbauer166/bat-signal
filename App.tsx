import React from 'react';
import { View, StyleSheet } from 'react-native';

import { HomeOne } from './src/screens/HomeFirst/HomeOne'

export default function App() {
  return (
    <View style={styles.container}>
      <HomeOne />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  }
})


