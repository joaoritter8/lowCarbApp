import React from 'react'
import {
  View,
} from 'react-native';

import { Icon } from '../../../index'

import styles from './smallCard.style';

import HeartButton from '../../buttons/HeartButton';
import { COLORS } from '../../../../constants';
import { Image } from 'expo-image';
import * as Device from 'expo-device';
import * as FileSystem from 'expo-file-system';
import { Touchable, Text } from '../../../Themed';

const SmallCard = ({ item, handleCardPress, handleHeartPress, isLiked, index }) => {

  return (
    <Touchable
      style={styles.container(index)}
      onPress={() => handleCardPress(item)}
      activeOpacity={0.8}
      lightColor={COLORS.black}
      darkColor={COLORS.blackLight}
    >

      <View style={styles.detailWrapper}>
        <Text
          style={styles.title}
          numberOfLines={3}
          lightColor={COLORS.lightWhite}
          darkColor={COLORS.lightWhite}
        >
          {item.name}
        </Text>

        <View style={styles.timeContainer}>

          <Icon
            name='clock'
            size={12}
            color={COLORS.white}
          />
          <Text style={styles.timeText}>
            {item.cookTime + item.prepareTime} min
          </Text>

        </View>

      </View>

      <View style={styles.logoContainer}>

        <Image
          source={
            Device.osName === "Android" ?
              `${FileSystem.cacheDirectory + item.id}.png`
              :
              item.image
          }
          cachePolicy='memory'
          contentFit='cover'
          style={styles.cardImage}
          transition={200}
        />


        <HeartButton
          isLiked={isLiked}
          handlePress={handleHeartPress}
          dimension={25}
        />
      </View>



    </Touchable>
  )
}

export default SmallCard