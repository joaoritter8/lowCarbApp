import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'

import styles from './recommendedCard.style';

import Svg, { Path } from "react-native-svg";
import { Image } from 'expo-image';
import * as Device from 'expo-device';
import * as FileSystem from 'expo-file-system';


import HeartButton from '../../buttons/HeartButton';
import { Touchable } from '../../../Themed';
import { COLORS } from '../../../../constants';


const RecommendedCard = ({ item, handleCardPress, handleHeartPress, isLiked, index, changeColor = false }) => {

  return (
    <Touchable
      style={styles.container(index)}
      onPress={() => handleCardPress(item)}
      activeOpacity={0.8}
      lightColor={changeColor ? COLORS.blackLight : COLORS.greenLight}
      darkColor={changeColor ? COLORS.blackLight : COLORS.greenLight}
    >
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
          dimension={30}
        />
      </View>

      <View style={styles.detailContainer}>

        <Text style={styles.title} numberOfLines={2}>
          {item.name}
        </Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

          <View style={styles.infoContainer}>
            <Svg width="14" height="14" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/Svg">
              <Path d="M100 200C80.2219 200 60.8879 194.135 44.443 183.147C27.9981 172.159 15.1809 156.541 7.61209 138.268C0.0433283 119.996 -1.937 99.8891 1.92152 80.491C5.78004 61.0929 15.3041 43.2746 29.2894 29.2894C43.2746 15.3041 61.0929 5.78004 80.491 1.92152C99.8891 -1.937 119.996 0.0433283 138.268 7.61209C156.541 15.1809 172.159 27.9981 183.147 44.443C194.135 60.8879 200 80.2219 200 100C200 126.522 189.464 151.957 170.711 170.711C151.957 189.464 126.522 200 100 200ZM100 14.2858C83.0473 14.2858 66.4754 19.3128 52.3797 28.7312C38.2841 38.1496 27.2979 51.5364 20.8104 67.1986C14.3229 82.8608 12.6254 100.095 15.9327 116.722C19.24 133.349 27.4035 148.622 39.3909 160.609C51.3782 172.597 66.6511 180.76 83.278 184.067C99.9049 187.375 117.139 185.677 132.801 179.19C148.464 172.702 161.85 161.716 171.269 147.62C180.687 133.525 185.714 116.953 185.714 100C185.714 77.2672 176.684 55.4654 160.609 39.3909C144.535 23.3163 122.733 14.2858 100 14.2858Z" fill="#F2F2F2" />
              <Path d="M132.783 142.869L92.8545 102.94V35.7261H107.14V97.0118L142.854 132.797L132.783 142.869Z" fill="#F2F2F2" />
            </Svg>
            <Text style={styles.infoText}>
              {item.cookTime + item.prepareTime} min
            </Text>
          </View>

          <View style={styles.infoContainer}>
            <Svg width="11.9" height="14" viewBox="0 0 170 200" fill="none" xmlns="http://www.w3.org/2000/Svg">
              <Path d="M138.356 127.166C136.361 137.895 131.001 147.778 122.997 155.484C114.992 163.19 104.728 168.35 93.5865 170.268C93.1636 170.334 92.736 170.368 92.3077 170.37C90.3781 170.37 88.5193 169.671 87.0997 168.412C85.6801 167.154 84.8035 165.428 84.6438 163.576C84.484 161.724 85.0528 159.882 86.2373 158.416C87.4218 156.949 89.1354 155.964 91.0385 155.657C106.971 153.074 120.49 140.055 123.192 124.685C123.534 122.747 124.661 121.02 126.325 119.882C127.99 118.745 130.055 118.291 132.067 118.62C134.079 118.949 135.873 120.034 137.054 121.637C138.236 123.24 138.697 125.229 138.356 127.166ZM169.231 118.518C169.231 140.128 160.316 160.854 144.448 176.134C128.579 191.415 107.057 200 84.6154 200C62.174 200 40.6517 191.415 24.7833 176.134C8.91481 160.854 0 140.128 0 118.518C0 92.6659 10.5769 66.2305 31.4038 39.9525C32.0631 39.1204 32.898 38.4323 33.8534 37.9335C34.8089 37.4348 35.8633 37.1366 36.9472 37.0587C38.031 36.9809 39.1197 37.1251 40.1414 37.4818C41.1632 37.8386 42.0948 38.3998 42.875 39.1284L66.0673 60.8045L87.2212 4.86891C87.6438 3.75329 88.3387 2.75186 89.2475 1.94906C90.1562 1.14626 91.252 0.56561 92.4426 0.256069C93.6332 -0.0534721 94.8835 -0.0828339 96.0884 0.17046C97.2932 0.423754 98.4171 0.952279 99.3654 1.71148C120.394 18.5172 169.231 63.4712 169.231 118.518ZM153.846 118.518C153.846 75.8417 119.433 38.9618 97.875 20.0635L76.4615 76.6102C76.022 77.7716 75.2877 78.8086 74.3255 79.6268C73.3633 80.4449 72.2037 81.0182 70.9525 81.2943C69.7013 81.5705 68.3982 81.5407 67.1621 81.2077C65.9259 80.8747 64.7959 80.2492 63.875 79.388L38.5192 55.7026C23.1635 77.0454 15.3846 98.1474 15.3846 118.518C15.3846 136.199 22.6785 153.156 35.6618 165.659C48.6451 178.161 66.2542 185.185 84.6154 185.185C102.977 185.185 120.586 178.161 133.569 165.659C146.552 153.156 153.846 136.199 153.846 118.518Z" fill="#F2F2F2" />
            </Svg>
            <Text style={styles.infoText}>
              {parseInt(item.nutrients.caloriesKCal)} Kcal
            </Text>
          </View>

        </View>

      </View>

    </Touchable>
  )
}

export default RecommendedCard