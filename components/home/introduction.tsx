import React from 'react'
import {
    Pressable,
    Text,
    TouchableOpacity,
} from 'react-native';

import { useRouter } from 'expo-router';

import { View } from '../Themed';

import styles from './home.style';
import { Icon } from '../index'
import { COLORS } from '../../constants';
import type { Theme } from '../../node_modules/@react-navigation/native/src/types';



const Introduction: React.FC = () => {

    const handleOpenSearch = () => {
        const navigation = useRouter();
        navigation.push('/(tabs)/search');
    }

    return (
        <View style={styles.containerIntro}>
            <Text style={styles.textIntro}>{`What do you want\ncooking today?`}</Text>

            <TouchableOpacity style={styles.containerButton} onPress={handleOpenSearch}>
                <Icon
                    name='search'
                    size={20}
                    color={COLORS.lightWhite}
                />
            </TouchableOpacity>




        </View>
    )
}

export default Introduction