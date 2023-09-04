import React, { createContext, useState } from 'react';

export const LikedContext = createContext();


const LikedProvider = ({children}) => {
    const [liked, setLiked] = useState([]);
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

    return (        
        <LikedContext.Provider value={{ liked, likedPress, recipes}}>
            {children}
        </LikedContext.Provider>
    );
}

export default LikedProvider;