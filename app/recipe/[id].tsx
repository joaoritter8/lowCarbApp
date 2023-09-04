import { TouchableOpacity, useWindowDimensions } from 'react-native';
import Icon from '../../components/icons/Icon'
import { View, AnimatedView, Text } from '../../components/Themed';

import { Stack, router, useGlobalSearchParams } from 'expo-router';
import { IRecipe } from '../../interfaces/recipe';
import { useContext, useEffect, useState } from 'react';
import { Image } from 'expo-image';
import styles from './recipe.style';
import { COLORS, FONT } from '../../constants';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import HeartButton from '../../components/common/buttons/HeartButton';

import { Gesture, GestureDetector, ScrollView } from 'react-native-gesture-handler';

import { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import InformationCard from '../../components/common/cards/Information/InformationCard';
import TabViewRecipe from '../../components/recipeScenes';


export default function Recipe() {

  const params = useGlobalSearchParams<any>();
  const [recipe, setRecipe] = useState<IRecipe>({} as IRecipe);

  //const { liked, likedPress } = useContext(LikedContext);
  useEffect(() => {
    try {
      setRecipe(JSON.parse(params.recipe));
    } catch (err) {
      console.log("ERROR", err)
      setRecipe({} as IRecipe);
    }
  }, [params]);

  const position = useSharedValue(230);

  const scrollGesture = Gesture
    .Pan()
    .onUpdate((event) => {
      position.value = event.absoluteY
    })
    .onEnd((event) => {
      position.value = withSpring(230)

    })

  const animatedImageStyle = useAnimatedStyle(() => ({
    height: position.value
  }))

  const animatedContainerStyle = useAnimatedStyle(() => ({
    top: position.value - 30
  }));


  return (
    <View style={styles.container}>

      <Stack.Screen
        options={{
          headerShown: false,
        }}

      />
      <AnimatedView style={[styles.imageContainer, animatedImageStyle]}>
        <Image
          source={recipe.image}
          style={styles.image}
          cachePolicy='memory'

        />
        <TouchableOpacity style={[styles.backContainer, { left: 18 }]} onPress={() => router.back()}>
          <MaterialIcons
            name='arrow-back-ios'
            size={35}
            color={COLORS.black}
          />
          <Text style={styles.textTopButtons}>back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.backContainer, { right: 18 }]}>
          <Ionicons
            name='arrow-redo-sharp'
            size={35}
            color={COLORS.black}
          />
          <Text style={styles.textTopButtons}>Share</Text>
        </TouchableOpacity>
      </AnimatedView>


      <AnimatedView style={[styles.recipeContainer, animatedContainerStyle]}>
        <HeartButton
          isLiked={true}
          handlePress={() => { }}
          dimension={60}
          style={{ right: 18, top: -30, backgroundColor: COLORS.greenLight }}
          activeOpacity={1}
        />
        <GestureDetector gesture={scrollGesture}>
          <View style={styles.gestureContainer}>
            <View style={styles.gestureIcon} />
          </View>
        </GestureDetector>

        <View style={{ width: '100%', paddingHorizontal: 18 }}>
          <Text style={styles.title} lightColor={COLORS.black} darkColor={COLORS.lightWhite}>
            {recipe.name}
          </Text>
        </View>

        {recipe.nutrients &&

          <ScrollView
            horizontal
            style={{ marginLeft: 18, marginVertical: 20, maxHeight: 60 }}
            showsHorizontalScrollIndicator={false}
          >
            <InformationCard
              data={recipe.prepareTime + recipe.cookTime}
              icon={'clock'}
              unit=' min'
              index={0}
            />

            <InformationCard
              data={recipe.nutrients.caloriesKCal}
              icon={'calories'}
              unit=' Kcal'
              index={1}
            />

            <InformationCard
              data={recipe.servings}
              icon={'people'}
              unit=' servings'
              index={2}
            />

            <InformationCard
              data={recipe.nutrients.protein}
              icon={'protein'}
              unit='g'
              index={3}
            />

            <InformationCard
              data={recipe.nutrients.totalCarbs}
              icon={'carbohydrate'}
              unit='g'
              index={4}
            />

            <InformationCard
              data={recipe.nutrients.fat}
              icon={'fat'}
              unit='g'
              index={5}
            />

          </ScrollView>

        }
        <View style={{ flex: 1, width: "100%" }}>

          <TabViewRecipe recipe={recipe} />

        </View>




      </AnimatedView>

    </View>

  );
}

