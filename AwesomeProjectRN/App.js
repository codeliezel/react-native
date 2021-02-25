import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const App = () => {
  return (
      <SafeAreaView>
    <View>
      <Text style={styles.textnow}>Hello, world!</Text>
      </View>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textnow: {
    fontSize: 59,
  },
});

export default App;

