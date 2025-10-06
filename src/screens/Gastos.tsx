import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Gastos() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gastos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9F7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#7A2A2A',
  },
});
