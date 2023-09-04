import React from 'react'
import { View, Text, Image,TextInput } from 'react-native'
import {Icon} from '../../index'

import styles from './inputText.style';
import { COLORS } from '../../../constants';

const InputText = ({
  label ='',
  iconUrl, 
  value,
  setValue,
  isPassword = false,
  placeholder = ''
}) => {
  return (
    <View style={styles.container}>   
      
        <Text style={styles.labelText}>
          {label}
        </Text>
        
      <View style={styles.inputWrapper}>
        <View style={styles.icon}>
          <Icon
            name={iconUrl}
            size={15}
            color={COLORS.grayLight}
          />
        </View>
        <TextInput 
          style={styles.inputText}
          value={value}
          onChangeText={( value ) => setValue(value)}
          secureTextEntry={isPassword}   
          placeholder={placeholder}
          placeholderTextColor={COLORS.grayLight}
                               
        />
      </View>
    </View>
  
  )
}

export default InputText