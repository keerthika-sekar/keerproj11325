import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

function Screen2() {
  return (
    <View style={styles.container}>
      <View style={styles.topHalf}>
        <Image
          source={require('../assets/Images/logo.png')} // Replace with your logo image URL or local path
          style={styles.logo}
        />
      </View>
      <View style={styles.bottomHalf}>
        <Text style={styles.text}>Welcome to MyApp</Text>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  topHalf: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8', // Optional: Background color for top half
  },
  bottomHalf: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0', // Optional: Background color for bottom half
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain', // Ensures the logo image maintains its aspect ratio
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Screen2;