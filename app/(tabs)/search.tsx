import {useState, useEffect} from 'react';
import { StyleSheet, Modal, FlatList, TouchableOpacity, useWindowDimensions } from 'react-native';
import { COLORS, FONT } from '../../constants';

import InputText from '../../components/common/inputText/InputText';
import SearchCard from '../../components/common/cards/search/SearchCard';
import Icon from '../../components/icons/Icon'

import EditScreenInfo from '../../components/EditScreenInfo';
import { ScrollView, Text, View, SafeView, AnimatedView } from '../../components/Themed';
import { IRecipe } from '../../interfaces/recipe';

import { Gesture, GestureDetector } from 'react-native-gesture-handler';

import { useSharedValue, useAnimatedStyle, withSpring, Layout, withTiming, useEvent } from 'react-native-reanimated';


export default function TabTwoScreen() {


  const [search,setSearch] = useState("");
  const [filterVisible, setFilterVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [recipes, setRecipes] = useState<IRecipe[]>([])

  const filterList = (value: string) => {
    return recipes.filter((recipe: IRecipe) => recipe.name.toLowerCase().includes(value.toLowerCase()));
  }
  const layout = useWindowDimensions()
  const position = useSharedValue(230);
  const opacity = useSharedValue(0.6);

  const scrollGesture = Gesture
    .Pan()
    .onUpdate((event) => {
      position.value = event.absoluteY
    })
    .onEnd((event) => {
      if(event.absoluteY < 500){
        position.value = withSpring(230)
      }else{
        position.value = withSpring(1000)
        opacity.value = withTiming(0, {duration: 250});
        opacity.value = 0        
      }

    })

  const animatedTopStyle = useAnimatedStyle(() => ({
    height: position.value,
    backgroundColor: `rgba(106,106,106,${opacity.value})`
  }))

  const animatedContainerStyle = useAnimatedStyle(() => ({
    top: position.value
  }));

  useEffect(()=> {
    if(opacity.value === 0)
      setFilterVisible(false)
  }, [opacity.value])




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

        <TouchableOpacity style={{height: 60, width: 60, borderRadius: 10, backgroundColor: COLORS.greenDark,  marginVertical: 8, marginLeft: 10, justifyContent:'center', alignItems:'center'}} onPress={()=> setFilterVisible(true)}>
            <Icon
              name="filter"
              size={20}
              color={COLORS.greenLight}
            />
            <Text style={{fontFamily: FONT.regular, fontSize:12, color: COLORS.greenLight}}>filter</Text>
        </TouchableOpacity>
      </View>
      { !isLoading &&
      
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

  

      }

    
      <Modal
        animationType="none"        
        visible={filterVisible}
        transparent={true}
        style={{flex:1}}
      >
        <AnimatedView style={[styles.topContainer, animatedTopStyle]}>
        
        </AnimatedView>


        <AnimatedView style={[styles.recipeContainer, animatedContainerStyle]}>
        
        <GestureDetector gesture={scrollGesture}>
          <View style={styles.gestureContainer}>
            <View style={styles.gestureIcon} />
          </View>
        </GestureDetector>

        <View style={{ width: '100%', paddingHorizontal: 18 }}>
          <Text style={[styles.title, {fontSize:20}]} lightColor={COLORS.black} darkColor={COLORS.lightWhite}>
            Search filter
          </Text>
        </View>

        
     
        

      </AnimatedView>

        
      </Modal>
              

      
      
    </SafeView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingHorizontal:18
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
  noDataContainer:{
    flex:1,
    paddingVertical: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  recipeContainer: {
    position: 'absolute',
    width: "100%",
    height: "100%",
    top: 200,
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
