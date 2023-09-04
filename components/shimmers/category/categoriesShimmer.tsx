import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import { Image } from 'expo-image';

import dynamicStyles from './categories.style';

import Svg, { Path } from "react-native-svg";

import { COLORS, FONT, icons } from '../../../constants';

import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';

import { LinearGradient } from 'expo-linear-gradient';

import * as Device from 'expo-device';

import * as FileSystem from 'expo-file-system';





const CategoriesShimmer: React.FC = () => {

  const array = ['item', 'item', 'item', 'item', 'item', 'item', 'item', 'item', 'item', 'item']


  const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);


  return (

    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {array.map((item, index) => {
        const styles = dynamicStyles(index)
        return (
          <View key={index} style={styles.container}>
            <ShimmerPlaceholder visible={false} style={{ height: "65%", borderRadius: 10, justifyContent: "center", }} />
            <ShimmerPlaceholder visible={false} style={{ flex: 1, height: 16, marginTop: 4, borderRadius: 7 }} />
            <ShimmerPlaceholder visible={false} style={{ flex: 1, height: 12, marginTop: 2, borderRadius: 7 }} />
          </View>
        )
      }
      )}
    </ScrollView>


  )
}

export default CategoriesShimmer