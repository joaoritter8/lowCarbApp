import React from 'react'
import {
  Text,
  useColorScheme
} from 'react-native';
import { Image } from 'expo-image';

import { View } from '../Themed';

import styles from './home.style';

const Welcome = () => {

  const theme = useColorScheme() ?? "light"

  function getGreeting() {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      return 'Good morning';
    } else if (currentHour >= 12 && currentHour < 18) {
      return 'Good afternoon';
    } else {
      return 'Good night';
    }
  }

  return (
    <View style={styles.containerWelcome}>

      <Image
        source={
          theme == "light" ?
            require('../../assets/images/profileDefault.png') :
            require('../../assets/images/profileDefaultDark.png')
        }
        cachePolicy='memory'
        contentFit='cover'
        style={styles.profilePicture}
        transition={200}
      />

      <View>
        <Text style={styles.textWelcome}>{getGreeting()},</Text>
        <Text style={styles.textWelcome}>Halsey!</Text>

      </View>

    </View>
  )
}

export default Welcome