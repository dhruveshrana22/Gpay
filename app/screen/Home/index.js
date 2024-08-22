import React, {useEffect, useState} from 'react';
import {Dimensions, ImageBackground, ScrollView, View} from 'react-native';
import {BaseColors, commonPadding} from '../../config/theme';
import {images} from '../../config/images';
import Animated, {withDecay, ZoomIn} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
import TextInput from '../../components/CTextInput';
import ImageLoader from '../../components/CImageLoder';
const zoomIn = ZoomIn.duration(1000).delay(100);
const AnimatedPlaceholder = ({style, isSearch, placeholderArray}) => {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex(
        prevIndex => (prevIndex + 1) % placeholderArray.length,
      );
    }, 3000); // Change sentence every 3 seconds

    return () => clearInterval(interval);
  }, [placeholderArray]);

  return (
    <TextInput
      style={style}
      placeholderText={placeholderArray[placeholderIndex]}
      isSearch={isSearch}
    />
  );
};
const Home = () => {
  const navigation = useNavigation();
  const placeholderArray = [
    'Pay by name or phone number',
    'Pay Anyone On UPI',
    'Pay friends and merchants',
  ];
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: BaseColors.black,
      }}>
      <View
        style={{
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal: 10,
        }}>
        <AnimatedPlaceholder
          style={{width: Dimensions.get('window').width / 1.3, marginBottom: 0}}
          isSearch
          placeholderArray={placeholderArray}
        />
        <ImageLoader
          source={images.logo}
          style={{borderRadius: 50, width: 35, height: 35}}
        />
      </View>
    </ScrollView>
  );
};

export default Home;
