import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Amigos() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Amigos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0A3E9D',
  },
});
