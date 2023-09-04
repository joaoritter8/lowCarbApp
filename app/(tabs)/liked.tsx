import { ActivityIndicator, StyleSheet, FlatList } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View, SafeView } from '../../components/Themed';
import { useContext, useEffect, useState } from 'react';
import { COLORS, FONT } from '../../constants';
import useFetch from '../../hook/useFetch';
import getRecipeID from '../../hook/getRecipeID';
import { LikedCard, InputText } from '../../components';
import { IRecipe } from '../../interfaces/recipe';
import { LikedContext } from '../../contexts/liked';

export default function TabTwoScreen() {

  
  const {likedPress, recipes} = useContext(LikedContext); 

  const [isLoading, setIsLoading] = useState(false);

  const [search, setSearch] = useState('');

  const handleCardPress = (recipe: IRecipe) =>{
    setIsLoading(true);
    likedPress(recipe);
    setIsLoading(false);
  }

  const filterList = (value: string) => {
    return recipes.filter((recipe: IRecipe) => recipe.name.toLowerCase().includes(value.toLowerCase()));
  }




  
  return (
    <SafeView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Saved recipes</Text>
      </View>
      <View style={styles.searchContainer}>
        <InputText
          value={search}
          setValue={setSearch}
          iconUrl={'search'}
          placeholder={'What are you looking for?'}
        />
      </View>
      { !isLoading &&
      
        <FlatList
          showsVerticalScrollIndicator={false}
          data={filterList(search)}
          keyExtractor={(item: IRecipe) => item.id}
          contentContainerStyle={{ }}
          renderItem={({item, index}) => (

            <LikedCard
            item={item}
            handleCardPress={()=> handleCardPress(item)}
            index={index}                         
            />
              
          )}
          ListEmptyComponent={() => (
            <View style={styles.noDataContainer}>
              <Text style={[styles.title, {fontSize: 22}]}>{`No recipe found`}</Text>
            </View>
          )}            
          
        />

  

      }

              

      
      
    </SafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: -80,
    width:'100%',
    paddingHorizontal: 18,
    justifyContent: 'center',
  },
  titleContainer: {
    width:"100%",    
    marginTop: 10, 
    alignItems:'center',      
    flexDirection:'row'
  },
  searchContainer:{  
    marginVertical: 5, 
    alignItems:'center',      
    flexDirection:'row'
  },
  noDataContainer:{
    flex:1,
    paddingVertical: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },  
  title: {
    fontSize: 32,
    fontFamily: FONT.semiBold
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
