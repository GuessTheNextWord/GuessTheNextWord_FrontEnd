import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Stepper({ min = 1, max = 10, initial = 2, onChange }) {
  const [value, setValue] = useState(initial);

  const decrement = () => {
    if (value > min) {
      setValue(value - 1);
      onChange && onChange(value - 1);
    }
  };

  const increment = () => {
    if (value < max) {
      setValue(value + 1);
      onChange && onChange(value + 1);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={decrement}>
        <Text style={styles.sign}>–</Text>
      </TouchableOpacity>
      <Text style={styles.value}>{value}</Text>
      <TouchableOpacity style={styles.button} onPress={increment}>
        <Text style={styles.sign}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    justifyContent: 'center',
  },
  button: {
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#ccc',
    width: 37,
    height: 37,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  sign: {
    fontSize: 25,
    color: '#333',
  },
  value: {
    fontSize: 20,
    minWidth: 32,
    textAlign: 'center',
  },
});