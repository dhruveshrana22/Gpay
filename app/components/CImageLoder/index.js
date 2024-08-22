import React, { useState } from 'react';
import { Text, View, StyleSheet, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import { BaseColors } from '../../config/theme';

const ImageLoader = ({
  source,
  style,
  resizeMethod,
  resizeMode = 'contain', // Default resize mode
  defaultImage = '',
  type = 'default',
  data = {},
  loadingIndicator = <ActivityIndicator size="small" color={BaseColors.primary} />,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <View style={{ position: 'relative' }}>
      {isLoading && (
        <View style={[StyleSheet.absoluteFillObject, { justifyContent: 'center', alignItems: 'center' }]}>
          {loadingIndicator}
        </View>
      )}
      <TouchableOpacity
        activeOpacity={type === 'book' ? 0.9 : 1}
        onPress={() => {
          if (type === 'book' && !isEmpty(data)) {
            // Handle book-specific logic
          }
        }}
      >
        <Image
          source={source}
          style={style}
          resizeMethod={resizeMethod}
          resizeMode={resizeMode}
          onLoadEnd={() => setIsLoading(false)}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ImageLoader;