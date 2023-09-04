import React, {useEffect, useState, useContext} from 'react'
import { 
    FlatList,
    Text,
    View
} from 'react-native';

import styles from './home.style';
import { ScrollView } from 'react-native-gesture-handler';
import { CategoriesShimmer, CategoryButton, CategoryCard, RecommendedCard, SmallCard, SmallCardShimmer} from '../index';
import { LikedContext } from '../../contexts/liked';
import  useFetch  from '../../hook/useFetch';
import { IRecipe } from '../../interfaces/recipe';

interface Props {
    categories: string;
    label: string;
}


const SmallRecomandations: React.FC<Props> = ({categories, label}) => {     
    
    const { data, isLoading, error, refetch } = useFetch('search', {tags: categories});

    const {liked, likedPress} = useContext(LikedContext)    


  return (
    <View style={[styles.containerCategories, {marginVertical: 20}]}>     

        <View style={{paddingVertical:10}}>
            <Text style={styles.label}>{label}</Text>
        </View>
        {
            isLoading ? (
                <SmallCardShimmer/>
            ) : error ? (
                <Text style={[styles.textIntro, {textAlign:'center'}]}>Something went wrong!</Text>
            ) : data.length === 0 ? (
                <Text style={[styles.textIntro, {textAlign:'center'}]}> No data </Text>
            ) :(
              
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    keyExtractor={(item: IRecipe) => item.id}
                    contentContainerStyle={{ }}
                    renderItem={({item, index}) => (  
                        
                        <SmallCard
                            item={item}
                            handleCardPress={() => {}}
                            handleHeartPress={() => {likedPress(item)}}
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

export default SmallRecomandations