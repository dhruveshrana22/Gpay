import React, {useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import {BaseColors} from '../../config/theme';
import {images} from '../../config/images';
import Animated, {ZoomIn} from 'react-native-reanimated';
import {BaseNavigationContainer, useNavigation} from '@react-navigation/native';
import TextInput from '../../components/CTextInput';
import Button from '../../components/Button';
const zoomIn = ZoomIn.duration(1000).delay(100);
const IntroScreen = () => {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={{
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}>
      <ScrollView
        contentContainerStyle={{flexGrow: 2, justifyContent: 'flex-end'}}>
        <Animated.View
          entering={zoomIn}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
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
        <TouchableWithoutFeedback>
          <View style={{flex: 1, justifyContent: 'center', paddingHorizontal:10}}>
            <TextInput placeholderText="Enter Name" />
            <TextInput placeholderText="Enter Your Mobile Number" />
            <TextInput placeholderText="Enter Your PassWord" isPassWord />
            <TextInput placeholderText="Conferm PassWord" isPassWord />
            <View style={{}}>
              <Button variant="outline">Login</Button>
              <Button variant="outline">Register</Button>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default IntroScreen;
