import { StyleSheet, Image } from 'react-native';

import { Text, View, SafeView } from '../../components/Themed';
import { Button, Categories, Introduction, Welcome, CategoryCard, Recomandations, SmallRecomandations } from '../../components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

import testResponse from '../../testResponse.json'

export default function TabOneScreen() {


  const item = testResponse;


  return (
    <SafeView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, width: '100%' }}>

        <Welcome />

        <Introduction />


        <Categories />

        <Recomandations
          label={"Recommended"}
          categories={'low-carb'}
        />

        <SmallRecomandations
          label={"Quick easy"}
          categories={'quick-easy'}
        />

        <Recomandations
          label={"Vegan"}
          categories={'vegan'}
        />

        <Recomandations
          label={"French"}
          categories={'french'}
          changeColor={true}
        />

        <Recomandations
          label={"Max 15 minutes"}
          categories={'15-minute-meals'}
        />

        <View style={{ height: 50 }} />


      </ScrollView>







    </SafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 18,
    alignItems: 'center',
    marginBottom: -40
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },

});
