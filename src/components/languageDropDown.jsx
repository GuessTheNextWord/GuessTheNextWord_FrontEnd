import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default function LanguageDropdown() {
  const [selected, setSelected] = useState('en');

  return (
    <View style={styles.container}>
      <RNPickerSelect
        value={selected}
        onValueChange={value => setSelected(value)}
        items={[
          { label: 'English', value: 'en' },
          { label: 'Español', value: 'es' },
          { label: 'Français', value: 'fr' },
          // Add more languages as needed
        ]}
        style={pickerSelectStyles}
        useNativeAndroidPickerStyle={false}
        Icon={() => <View style={styles.icon} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  icon: {
    borderTopWidth: 6,
    borderTopColor: '#333',
    borderRightWidth: 6,
    borderRightColor: 'transparent',
    borderLeftWidth: 6,
    borderLeftColor: 'transparent',
    width: 0,
    height: 0,
    marginTop: 10,
    marginRight: 0,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#d3d6db',
    borderRadius: 20,
    color: '#333',
    paddingRight: 120, 
    backgroundColor: '#fff',
  },
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#d3d6db',
    borderRadius: 20,
    color: '#333',
    paddingRight: 30,
    backgroundColor: '#fff',
  },
  iconContainer: {
    top: 12,
    right: 12,
  },
});