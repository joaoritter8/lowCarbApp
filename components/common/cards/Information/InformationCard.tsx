import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import { Icon } from '../../../index'


import HeartButton from '../../buttons/HeartButton';
import { COLORS } from '../../../../constants';
import { Image } from 'expo-image';
import * as Device from 'expo-device';
import * as FileSystem from 'expo-file-system';
import dynamicStyles from './informationCard.style';

interface Props {
  icon: string;
  data: number;
  unit: string;
  index: number

}

const InformationCard: React.FC<Props> = ({
  icon,
  data,
  unit,
  index,
}) => {

  const styles = dynamicStyles(index);

  return (
    <View style={styles.container}>
      <Icon
        name={icon}
        size={25}
        color={COLORS.lightWhite}
      />
      <Text style={styles.infoText}>
        {Math.round(data) + unit}
      </Text>
    </View>
  )
}

export default InformationCard