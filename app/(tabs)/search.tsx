import {useState, useEffect, useContext} from 'react';
import { StyleSheet, FlatList, TouchableOpacity, useWindowDimensions, PanResponderGestureState  } from 'react-native';
import { COLORS, FONT, TAGS } from '../../constants';

import InputText from '../../components/common/inputText/InputText';
import SearchCard from '../../components/common/cards/search/SearchCard';
import Icon from '../../components/icons/Icon'
import { Context } from '../../contexts';

import { ScrollView, Text, View, SafeView, AnimatedView } from '../../components/Themed';
import { IRecipe } from '../../interfaces/recipe';
import ModalFilter from '../../components/modal/filterModal';
import CategoryFilterButton from '../../components/common/buttons/categoryFilterButton';








export default function TabTwoScreen() {
  
  const layout = useWindowDimensions()

  const [search,setSearch] = useState("");
  const [filterVisible, setFilterVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [recipes, setRecipes] = useState<IRecipe[]>([]);

  const { categoryPress, selectedCategory } = useContext(Context);

  const filterList = (value: string) => {
    return recipes.filter((recipe: IRecipe) => recipe.name.toLowerCase().includes(value.toLowerCase()));
  }


  return (
    <SafeView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Search</Text>
      </View>
      <View style={styles.searchContainer}>
        <InputText
          value={search}
          setValue={setSearch}
          iconUrl={'search'}
          placeholder={'What are you looking for?'}
        />

        <TouchableOpacity style={styles.filterButtonContainer} onPress={()=>{ setFilterVisible(true)}}>
            <Icon
              name="filter"
              size={20}
              color={COLORS.greenLight}
            />
            <Text style={{fontFamily: FONT.regular, fontSize:12, color: COLORS.greenLight}}>filter</Text>
        </TouchableOpacity>
      </View>
      {/* { !isLoading &&
      
        <FlatList
          showsVerticalScrollIndicator={false}
          data={filterList(search)}
          keyExtractor={(item: IRecipe) => item.id}
          contentContainerStyle={{ }}
          renderItem={({item, index}) => (

            <SearchCard
              item={item}
              handleCardPress={()=>{}}
              handleHeartPress={()=>{}}
              handleSharePress={()=>{}}
              isLiked={false}
              index={index} 
            
            />

            
              
          )}
          ListEmptyComponent={() => (
            <View style={styles.noDataContainer}>
              <Text style={[styles.title, {fontSize: 22}]}>{`No recipe found`}</Text>
            </View>
          )}            
          
        />

  

      } */}


      



      <ModalFilter    
        isVisible={filterVisible}
        setVisible={()=>setFilterVisible(false)}
      />


    
    
      
              

      
      
    </SafeView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingHorizontal: 18
  },
  topContainer: {
    flex: 1,    
  },
  titleContainer: {
    width:"100%",    
    marginTop: 10, 
    alignItems:'center',      
    flexDirection:'row'
  },
  searchContainer:{  
    marginVertical: 5, 
    alignItems: 'flex-end',      
    flexDirection:'row',
    justifyContent:'space-between'
  },
  filterButtonContainer: {
    height: 60, 
    width: 60, 
    borderRadius: 10,
    backgroundColor: COLORS.greenDark,  
    marginVertical: 8, 
    marginLeft: 10, 
    justifyContent:'center', 
    alignItems:'center'
  },
  noDataContainer:{
    flex:1,
    paddingVertical: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  recipeContainer: {    
    flex:1,
    top: 200,
    width: "100%",

    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    alignItems: 'center'

},  
  title: {
    fontSize: 32,
    fontFamily: FONT.semiBold,
    textAlign: 'center'
  }, 
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  gestureContainer: {
    height: 30,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center'
},
gestureIcon: {
    height: 4,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.grayDark,
    borderRadius: 25,
    marginVertical: 8
},
});
