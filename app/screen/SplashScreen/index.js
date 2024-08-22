import React, {useEffect} from 'react';
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';
import {BaseColors} from '../../config/theme';
import {images} from '../../config/images';
import Animated, {ZoomIn} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
const zoomIn = ZoomIn.duration(1000).delay(100);
const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    // Navigate to Home screen after 5 seconds
    const timer = setTimeout(() => {
      navigation.replace('Home');
    }, 3000);

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animated.View
        entering={zoomIn}
        style={{
          top: Dimensions.get('window').height / 2.2,
          justifyContent: 'flex-end',
        }}>
        <Image
          source={images.logo}
          style={{
            width: Dimensions.get('window').width / 2.8,
            height: Dimensions.get('window').width / 2.8,
          }}
          resizeMode="contain"
        />
      </Animated.View>
      <View style={{flex: 1}}>
        <Animated.Text
          style={{
            color: BaseColors.whiteSmoke,
            fontSize: Dimensions.get('window').width / 10.9,
            top: Dimensions.get('window').height / 1.42,
          }}>
          Google
        </Animated.Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default SplashScreen;
