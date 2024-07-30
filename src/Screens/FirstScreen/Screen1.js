import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';

import Screen2 from './Screen2';


const IMAGE_SIZE = 150; 


const Screen1 = ({ navigation }) => {
  console.log('navigation prop:', navigation); 
  return (
    <View style={styles.container}>
      <View style={styles.topLeftContainer}>
        <Image
          source={require('../assets/Images/hi.png')}
          style={styles.image}
        />
        <Image
          source={require('../assets/Images/wel.png')}
          style={[styles.image, styles.imageOffset,]}
        />
        
      </View>
      <Image
        source={require('../assets/Images/logo.png')}
        style={styles.centerImage}
      />
      <View style={styles.bottomCenterContainer}>
        <TouchableOpacity 
        style={styles.button} 
        onPress={()=>navigation.navigate('Screen2')}>
          <Text style={styles.buttonText}>Get Started</Text>
          <Image
            source={require('../assets/Images/arrow.png')}
            style={styles.buttonImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centers the centered image vertically
    alignItems: 'center', // Centers the centered image horizontally
    
  },
  topLeftContainer: {
    position: 'absolute',
    top:150,
    left:40,
    flexDirection:'column',

  },
  
  imageOffset: {
    marginTop: 20, // Adjust offset as needed
  },

  centerImage: {
    width: 400,
    height: 250,
  },

  bottomCenterContainer: {
    position: 'absolute',
    bottom: 120, 
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row', 
    alignItems: 'center',
    backgroundColor: '#5EB0EC',
    padding: 10,
    width:250,
    borderRadius: 5,
    justifyContent:'center',
  },
  
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign:'center',
    fontFamily:'Robotoo',
    fontStyle:'normal',
  },
  buttonImage: {
    width: 40,
    height: 15,
    paddingLeft:5,
  },
});


export default Screen1;
