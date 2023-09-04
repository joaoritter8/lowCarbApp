import React from 'react'
import {
  TouchableOpacity,
  StyleSheet
} from 'react-native'

import styles from './button.style';

import Svg, { Path } from "react-native-svg";
import Icon from '../../icons/Icon';
import { COLORS } from '../../../constants';
import { AntDesign } from '@expo/vector-icons';

interface Props {
  handlePress: () => void;
  dimension: number;
  isLiked: boolean;
  style?: any;
  activeOpacity?: number;
}

const HeartButton: React.FC<Props> = ({ handlePress, dimension, isLiked, style, activeOpacity = 0.8 }) => {

  const styles = dynamicStyles(dimension);

  return (
    <TouchableOpacity style={[styles.containerHeart, { ...style }]} onPress={handlePress} activeOpacity={activeOpacity}>
      {isLiked ?

        <AntDesign
          name='heart'
          size={dimension * 0.7}
          color={COLORS.greenDark}
        />
        :
        <AntDesign
          name='hearto'
          size={dimension * 0.7}
          color={COLORS.greenDark}
        />

      }

    </TouchableOpacity>
  )
}

const dynamicStyles = (dimension: number) => {

  return StyleSheet.create({
    containerHeart: {
      position: 'absolute',
      backgroundColor: COLORS.white,
      borderRadius: 50,
      height: dimension,
      width: dimension,
      justifyContent: 'center',
      alignItems: 'center',
      right: 6,
      top: 6

    }
  })
}


export default HeartButton