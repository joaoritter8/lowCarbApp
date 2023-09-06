import React, { createContext, useState } from 'react';

export const Context = createContext();


const ContextProvider = ({children}) => {
    const [liked, setLiked] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [recipes, setRecipes] = useState([]);
    
    const likedPress = (recipe) => {
        if(liked.indexOf(recipe.id) !== -1) {
            setLiked(liked.filter(item => item!== recipe.id));
            setRecipes(recipes.filter(item => item.id!== recipe.id));
        } else {
            setLiked([...liked, recipe.id]);
            setRecipes([...recipes, recipe]);
        }
    }

    const categoryPress = (tag) => {
        if( selectedCategory.indexOf(tag) !== -1) {
            setSelectedCategory(selectedCategory.filter(item => item !== tag));            
        } else {
            setSelectedCategory([...selectedCategory, tag]);            
        }
    }

    return (        
        <Context.Provider value={{ liked, likedPress, recipes, categoryPress, selectedCategory}}>
            {children}
        </Context.Provider>
    );
}

export default ContextProvider;