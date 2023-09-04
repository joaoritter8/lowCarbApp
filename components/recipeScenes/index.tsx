import * as React from 'react';
import { useWindowDimensions, Text as DefaultText, StyleSheet } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { IRecipe, I_Ingredients } from '../../interfaces/recipe';
import { ScrollView, Text, View } from '../Themed';
import { COLORS, FONT, THEME } from '../../constants';
import { VictoryPie } from 'victory-native';

interface Props {
    recipe: IRecipe;
}

const TabViewRecipe: React.FC<Props> = ({ recipe }) => {

    const AboutRoute = () => (
        <ScrollView style={styles.container}>
            <DefaultText style={styles.title}>Descripton</DefaultText>
            <Text style={styles.description} lightColor={COLORS.black} darkColor={COLORS.lightWhite}>{recipe.description}</Text>
            <View style={{ flex: 1, height: 300, width: "100%" }} />
        </ScrollView>
    );

    const IngredientsRoute = () => (
        <ScrollView style={styles.container}>
            <DefaultText style={styles.title}>Ingredients</DefaultText>
            {
                recipe.ingredients &&
                recipe.ingredients.map((ingredient: I_Ingredients, index: number) => (
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, width: "100%", paddingRight: 18 }} key={index}>
                        <View style={{ height: 6, width: 6, borderRadius: 20, backgroundColor: COLORS.greenLight, marginRight: 5 }}></View>
                        {ingredient.servingSize.desc !== undefined ?
                            <Text style={{ fontSize: 14, fontFamily: FONT.regular }}>{ingredient.servingSize.desc.replace(',', ' or')} of {ingredient.name.replace('@', '%')}</Text>

                            :
                            <Text style={{ fontSize: 14, fontFamily: FONT.regular }}>{ingredient.servingSize.qty} {ingredient.servingSize.units} of {ingredient.name.replace('@', '%')}</Text>


                        }
                        {ingredient.servingSize.grams &&
                            <Text style={{ color: COLORS.grayLight, fontSize: 10, fontFamily: FONT.light }}>({ingredient.servingSize.grams}g)</Text>
                        }

                    </View>
                ))
            }
            <View style={{ flex: 1, height: 300, width: "100%" }} />
        </ScrollView>
    );

    const CookingDetailsRoute = () => (
        <ScrollView style={styles.container}>
            <DefaultText style={styles.title}>Cooking steps</DefaultText>
            {
                recipe.steps &&
                recipe.steps.map((step: string, index: number) => (
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, width: "100%", paddingRight: 18 }} key={index}>
                        <View style={{ width: 10, alignItems: 'center', justifyContent: 'center' }}>
                            <DefaultText style={[styles.title, { fontSize: 16 }]}>{index + 1}</DefaultText>
                        </View>
                        <View style={{ height: "100%", width: 2, borderRadius: 20, marginHorizontal: 5, backgroundColor: THEME === 'light' ? COLORS.greenDark : COLORS.greenLight }}></View>
                        <Text style={{ fontSize: 14, fontFamily: FONT.regular }}>{step}</Text>


                    </View>
                ))
            }
            <View style={{ flex: 1, height: 300, width: "100%" }} />
        </ScrollView>
    );

    const NutrientsRoute = () => (


        <ScrollView style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                <Text style={styles.title} lightColor={COLORS.greenDark} darkColor={COLORS.greenLight}>Nutrion Facts </Text>
                <Text style={styles.dailyText} lightColor={COLORS.grayDark} darkColor={COLORS.grayLight}>{`(Daily Value*)`}</Text>

            </View>

            <View style={{ marginVertical: 10 }}>
                <Text style={[styles.servingsText, { fontSize: 12 }]}>{recipe.servings} servings</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.servingsText}>Serving size</Text>
                    <Text style={styles.servingsText}>
                        {recipe.servingSizes[0].qty + " " + recipe.servingSizes[0].units + " "}
                        {recipe.servingSizes[0].grams ? "(" + recipe.servingSizes[0].grams.toFixed(2) + "g)" : null}
                    </Text>

                </View>
            </View>
            {recipe.nutrients.caloriesKCal &&
                <View style={{ marginVertical: 10 }}>
                    <Text style={[styles.servingsText, { fontSize: 12 }]}>Amount per serving</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.caloriesText}>Calories</Text>
                        <Text style={styles.caloriesText}>
                            {recipe.nutrients.caloriesKCal.toFixed(1)} Kcal
                        </Text>
                    </View>
                    <View style={styles.containerLineGra} lightColor={COLORS.grayLight} darkColor={COLORS.blackLight}>
                        <View style={[styles.lineGraphic, { width: (((recipe.nutrients.caloriesKCal * 100) / 2000) * 150) / 100 }]} lightColor={COLORS.greenDark} darkColor={COLORS.greenLight} />
                    </View>
                    <Text style={styles.percentageLine} lightColor={COLORS.greenDark} darkColor={COLORS.greenLight}>{((recipe.nutrients.caloriesKCal * 100) / 2000).toFixed(2)}%</Text>
                </View>
            }

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 30 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                    <VictoryPie
                        animate={{
                            duration: 5000
                        }}
                        height={100}
                        width={100}
                        colorScale={THEME == 'light' ? [COLORS.grayLight, COLORS.greenDark] : [COLORS.blackLight, COLORS.greenLight]}
                        style={{ labels: { fillOpacity: 0 } }}
                        innerRadius={44}
                        data={[
                            { x: "base", y: 100 },
                            { x: "nutrient", y: recipe.nutrients.totalCarbs },
                        ]}
                        radius={50}
                    />
                    <View style={{ position: 'absolute' }}>
                        <Text style={{ fontFamily: FONT.bold, color: COLORS.greenDark, fontSize: 16, textAlign: 'center' }}>3.56%</Text>
                        <Text style={{ fontFamily: FONT.regular, color: COLORS.greenDark, fontSize: 12, textAlign: 'center' }}>carbs</Text>

                    </View>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                    <VictoryPie
                        animate={{
                            duration: 5000
                        }}
                        height={100}
                        width={100}
                        colorScale={THEME == 'light' ? [COLORS.grayLight, COLORS.greenDark] : [COLORS.blackLight, COLORS.greenLight]}
                        style={{ labels: { fillOpacity: 0 } }}
                        innerRadius={44}
                        data={[
                            { x: "base", y: 100 },
                            { x: "nutrient", y: recipe.nutrients.protein },
                        ]}
                        radius={50}
                    />
                    <View style={{ position: 'absolute' }}>
                        <Text style={{ fontFamily: FONT.bold, color: COLORS.greenDark, fontSize: 16, textAlign: 'center' }}>3.56%</Text>
                        <Text style={{ fontFamily: FONT.regular, color: COLORS.greenDark, fontSize: 12, textAlign: 'center' }}>protein</Text>

                    </View>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                    <VictoryPie
                        animate={{
                            duration: 5000
                        }}
                        height={100}
                        width={100}
                        colorScale={THEME == 'light' ? [COLORS.grayLight, COLORS.greenDark] : [COLORS.blackLight, COLORS.greenLight]}
                        style={{ labels: { fillOpacity: 0 } }}
                        innerRadius={44}
                        data={[
                            { x: "base", y: 100 },
                            { x: "nutrient", y: recipe.nutrients.fat },
                        ]}
                        radius={50}
                    />
                    <View style={{ position: 'absolute' }}>
                        <Text style={{ fontFamily: FONT.bold, color: COLORS.greenDark, fontSize: 16, textAlign: 'center' }}>3.56%</Text>
                        <Text style={{ fontFamily: FONT.regular, color: COLORS.greenDark, fontSize: 12, textAlign: 'center' }}>fat</Text>

                    </View>
                </View>

            </View>





            <View style={{ flex: 1, height: 300, width: "100%" }} />
        </ScrollView>
    );
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);

    const [routes] = React.useState([
        { key: 'about', title: 'About' },
        { key: 'ingredients', title: 'Ingredients' },
        { key: 'cookingDetails', title: 'Cooking details' },
        { key: 'nutrients', title: 'Nutrients' },
    ]);

    const renderScene = SceneMap({
        about: AboutRoute,
        ingredients: IngredientsRoute,
        cookingDetails: CookingDetailsRoute,
        nutrients: NutrientsRoute,

    });

    const renderTabBar = (props: any) => (

        <TabBar
            {...props}
            activeColor={THEME == 'light' ? COLORS.black : COLORS.lightWhite}
            inactiveColor={THEME == 'light' ? COLORS.grayDark : COLORS.grayDark}
            contentContainerStyle={{ justifyContent: "center" }}
            labelStyle={{ fontFamily: FONT.semiBold, fontSize: 13, textTransform: 'capitalize', textAlign: "center" }}
            tabStyle={{ width: 'auto', height: 40 }}
            style={{ backgroundColor: THEME == 'light' ? COLORS.lightWhite : COLORS.black }}
            indicatorStyle={{ backgroundColor: COLORS.black }}
        />
    );

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            renderTabBar={renderTabBar}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width, height: layout.height }}
        />
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 18,

    },
    title: {
        fontFamily: FONT.semiBold,
        fontSize: 25,
    },
    description: {
        marginTop: 20,
        fontFamily: FONT.regular,
        fontSize: 14,
        textAlign: 'justify'
    },
    dailyText: {
        fontFamily: FONT.regular,
        fontSize: 14,
        marginBottom: 4
    },
    servingsText: {
        fontFamily: FONT.extraBold,
        fontSize: 16,
    },
    caloriesText: {
        fontFamily: FONT.extraBold,
        fontSize: 32,
    },
    containerLineGra: {
        height: 4,
        width: 150,
        borderRadius: 10,
        alignSelf: 'flex-end'
    },
    lineGraphic: {
        height: "100%",
        borderRadius: 10,
        alignSelf: 'flex-start'
    },
    percentageLine: {
        fontFamily: FONT.bold,
        fontSize: 14,
        textAlign: 'right'
    }

});

export default TabViewRecipe;