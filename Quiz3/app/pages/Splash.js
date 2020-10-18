import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const Splash = () => {
  return (
    <View style={styles.splashScreen}>
      <View style={styles.splashCircle} />
      <Image
        style={styles.splashLogo}
        source={require('../assets/img/logo.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  splashScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashLogo: {
    position: 'relative',
    zIndex: 10,
  },
  splashCircle: {
    width: 400,
    height: 400,
    backgroundColor: '#211F65',
    opacity: 0.1,
    borderRadius: 1000,
  },
});

export default Splash;
