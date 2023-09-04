import React, { useEffect, useState, useContext } from 'react'
import {
    FlatList,
    Text,
    View
} from 'react-native';

import styles from './home.style';
import { ScrollView } from 'react-native-gesture-handler';
import { CategoriesShimmer, CategoryButton, CategoryCard } from '../index';
import { LikedContext } from '../../contexts/liked';
import useFetch from '../../hook/useFetch';
import { IRecipe } from '../../interfaces/recipe';

import { useRouter } from 'expo-router';


const Categories = () => {

    const categories = ['all-recipes', 'breakfast', 'desserts', 'gluten-free', 'lunch', 'salads'];

    const [isSelected, setIsSelected] = useState<Array<boolean>>([true, false, false, false, false, false]);

    const indexCategory = isSelected.indexOf(true);

    const paramsFetch = indexCategory != 0 ? { tags: categories[indexCategory] } : { limit: 20 };

    const { data, isLoading, error, refetch } = useFetch('search', paramsFetch);

    const { liked, likedPress } = useContext(LikedContext);

    const router = useRouter();

    const toggleAtIndex = (index: number) => {
        setIsSelected((prevArray: Array<boolean>) => {

            if (prevArray[index]) {
                return prevArray;
            }

            const newArray = prevArray.map((value, i) => i === index);
            return newArray;
        });

    };

    useEffect(() => {
        refetch()
    }, [isSelected])


    return (
        <View style={styles.containerCategories}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flex: 1, marginBottom: 10 }}>

                {categories.map((item, index) => (

                    <CategoryButton
                        name={categories[index]}
                        isSelected={isSelected[index]}
                        setIsSelected={() => toggleAtIndex(index)}
                        index={index}
                        key={index}
                    />
                ))

                }

            </ScrollView>

            {
                isLoading ? (
                    <CategoriesShimmer />
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
                        renderItem={({ item, index }) => (

                            <CategoryCard
                                item={item}
                                handleHeartPress={() => { likedPress(item) }}
                                isLiked={liked.indexOf(item.id) !== -1}
                                index={index}
                            />

                        )}

                    />
                )
            }



        </View>
    )
}

export default Categories