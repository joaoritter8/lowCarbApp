import React from 'react'
import { 
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import { Icon } from '../../../index'

import styles from './searchCard.style';

import { COLORS } from '../../../../constants';

import { StyleProp } from '../../../../node_modules/react-native/Libraries/StyleSheet/StyleSheet';
import {TextStyle} from '../../../../node_modules/react-native/Libraries/StyleSheet/StyleSheetTypes';

interface Props {
  icon: string;
  data: number;
  unit: string;
  style: StyleProp<TextStyle>
}

const NutrientCard: React.FC<Props> = ({ icon, data, unit, style }) => { 

  return (
    <TouchableOpacity style={[styles.infoContainer, {...style}]} activeOpacity={1}>
      <Icon
        name={icon}
        size={14}
        color={COLORS.lightWhite}
      />      
      <Text style={styles.infoText}>
        {Math.round(data)+unit}
      </Text>
    </TouchableOpacity> 
  )
}

export default NutrientCard