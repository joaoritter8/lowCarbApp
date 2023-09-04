import React, { useEffect, useState, useContext } from 'react'
import {
    FlatList,
    Text,
    View
} from 'react-native';

import styles from './home.style';
import { ScrollView } from 'react-native-gesture-handler';
import { CategoriesShimmer, CategoryButton, CategoryCard, RecommendedCard, RecommendedShimmer } from '../index';
import { LikedContext } from '../../contexts/liked';
import useFetch from '../../hook/useFetch';
import { IRecipe } from '../../interfaces/recipe';

interface Props {
    categories: string;
    label: string;
    changeColor?: boolean;
}


const Recomandations: React.FC<Props> = ({ categories, label, changeColor = false }) => {

    const { data, isLoading, error, refetch } = useFetch('search', { tags: categories });

    const { liked, likedPress } = useContext(LikedContext)


    return (
        <View style={[styles.containerCategories, { marginVertical: 10 }]}>
            <View style={{ paddingBottom: 6 }}>
                <Text style={styles.label}>{label}</Text>
            </View>

            {
                isLoading ? (
                    <RecommendedShimmer />
                ) : error ? (
                    <Text style={[styles.textIntro, { textAlign: 'center' }]}>Something went wrong!</Text>
                ) : data.length === 0 ? (
                    <Text style={[styles.textIntro, { textAlign: 'center' }]}> No data </Text>
                ) : (

                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={data}
                        keyExtractor={(item: IRecipe) => item.id}
                        contentContainerStyle={{}}
                        renderItem={({ item, index }) => (
                            <RecommendedCard
                                item={item}
                                handleCardPress={() => { }}
                                handleHeartPress={() => { likedPress(item) }}
                                isLiked={liked.indexOf(item.id) !== -1}
                                index={index}
                                changeColor={changeColor}
                            />
                        )}
                    />




                )
            }



        </View>
    )
}

export default Recomandations