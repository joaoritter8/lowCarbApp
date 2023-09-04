import React from 'react'
import { 
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native'

import styles from './button.style';

const ApplyButton = ({ handleNavigate }) => {

  return (
    <TouchableOpacity style={[styles.container, {flex: 0, width: 158}]} onPress={handleNavigate} activeOpacity={0.7}>
      <Text style={styles.nameApply}>
        Apply
      </Text>
    </TouchableOpacity>
  )
}

export default ApplyButton