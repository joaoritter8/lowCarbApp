import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import { Image } from 'expo-image';

import dynamicStyles from './recommended.style';

import Svg, { Path } from "react-native-svg";

import { COLORS, FONT, icons } from '../../../constants';

import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';

import { LinearGradient } from 'expo-linear-gradient';

import * as Device from 'expo-device';

import * as FileSystem from 'expo-file-system';





const RecommendedShimmer: React.FC = () => {

  const array = ['item', 'item', 'item', 'item', 'item', 'item', 'item', 'item', 'item', 'item']


  const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);


  return (

    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {array.map((item, index) => {
        const styles = dynamicStyles(index)
        return (
          <ShimmerPlaceholder key={index} visible={false} style={styles.container} />

        )
      }
      )}
    </ScrollView>


  )
}

export default RecommendedShimmer