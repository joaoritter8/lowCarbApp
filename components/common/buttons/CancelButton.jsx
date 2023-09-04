import React from 'react'
import { 
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native'

import styles from './button.style';

const CancelButton = ({ name, handleNavigate }) => {

  return (
    <TouchableOpacity style={styles.containerCancel} onPress={handleNavigate} activeOpacity={0.7}>
      <Text style={styles.nameCancel}>
        Cancel
      </Text>
    </TouchableOpacity>
  )
}

export default CancelButton