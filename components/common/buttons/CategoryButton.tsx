import React from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import { Icon } from '../../index'

import dynamicStyles from './categoryButton.style';

import { COLORS } from '../../../constants';

interface Props {
  name: string;
  isSelected: boolean;
  setIsSelected: () => void;
  index: number;
}

const CategoryButton: React.FC<Props> = ({ name, index, isSelected, setIsSelected }) => {

  const styles = dynamicStyles(isSelected, index)

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={setIsSelected}>
      <View style={styles.buttonWrapper}>
        <Icon
          name={name}
          size={35}
          color={isSelected ? COLORS.greenLight : COLORS.greenDark}
        />
      </View>
      <Text style={styles.text}>
        {name.replace('-', ' ')}
      </Text>
    </TouchableOpacity>
  )
}

export default CategoryButton