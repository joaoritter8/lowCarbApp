import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'

import styles from './searchCard.style';

import { HeartButton, ShareButton, NutrientCard } from '../../../index'
import { ScrollView } from 'react-native-gesture-handler';
import { Image } from 'expo-image';
import * as Device from 'expo-device';
import * as FileSystem from 'expo-file-system';


const SearchCard = ({ item, handleCardPress, handleHeartPress, handleSharePress, isLiked, index }) => {

  return (
    <TouchableOpacity
      style={styles.container(index)}
      onPress={() => handleCardPress(item)}
      activeOpacity={0.6}
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
          dimension={45}
        />
        <ShareButton
          handlePress={handleSharePress}
          dimension={45}
          top={62}
        />
      </View>

      <View style={styles.detailContainer}>

        <Text style={styles.title} numberOfLines={2}>
          {item.name}
        </Text>

        <Text style={styles.descriptionText} numberOfLines={3}>
          {item.description}
        </Text>

      </View>

      <ScrollView style={{ flex: 1, flexDirection: 'row', marginLeft: 9, maxHeight: 23, marginBottom: 9 }} horizontal showsHorizontalScrollIndicator={false}>
        <NutrientCard
          data={(item.prepareTime + item.cookTime)}
          icon={"clock"}
          unit={" min"}
          style={{ marginLeft: 0 }}
        />

        <NutrientCard
          data={item.nutrients.caloriesKCal}
          icon={"calories"}
          unit={" Kcal"}
        />

        <NutrientCard
          data={item.servings}
          icon={"people"}
          unit={item.servings > 1 ? " servings" : " serving"}
        />

        <NutrientCard
          data={item.nutrients.protein}
          icon={"protein"}
          unit={"g"}
        />

        <NutrientCard
          data={item.nutrients.totalCarbs}
          icon={"carbohydrate"}
          unit={"g"}
        />

        <NutrientCard
          data={item.nutrients.fat}
          icon={"fat"}
          unit={"g"}
          style={{ marginRight: 9 }}
        />

      </ScrollView>

    </TouchableOpacity>
  )
}

export default SearchCard