import React, { useState, useEffect, useContext } from 'react'
import {  
  useWindowDimensions,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { Text, Touchable, View } from '../../Themed';
import { COLORS, FONT, TAGS, THEME } from '../../../constants';



interface Props {
    isSelected: boolean;
    name: string;
    setSelected: () => void;
    index: number;
}

const CategoryFilterButton: React.FC<Props> = ({ isSelected, name, setSelected, index}) => {
    const styles = dynamicStyles(isSelected, index);

  
  

    return (
        <TouchableOpacity onPress={setSelected} activeOpacity={0.6} style={{marginVertical: 5}}>           
            <View style={styles.container} lightColor={isSelected ? COLORS.greenLight : ''} darkColor={isSelected ? COLORS.greenLight : ''}>
                <Text 
                    style={styles.text} 
                    
                >{name}</Text>
            </View>
        </TouchableOpacity>



    )
}

export default CategoryFilterButton;


const dynamicStyles = (isSelected: boolean, index: number) =>{
    return StyleSheet.create({
        container:{
            minHeight: 40,
            minWidth: 100,   
            maxWidth: 130,                    
            padding: 8,
            borderRadius: 10,         
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 2,
            borderColor : isSelected ? COLORS.greenLight : COLORS.grayDark,
            marginLeft: (index+1/2) != 0 ? 10 : 0, 
        },
        text: {
            color: isSelected? COLORS.lightWhite : COLORS.grayDark,           
            fontSize: 12,
            fontFamily: FONT.light,
            textAlign:'center'
        }
    })
}