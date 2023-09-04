export interface IRecipe {
    id: string;
    name: string;
    tags: string[];
    description: string;
    prepareTime: number;
    cookTime: number;
    ingredients: I_Ingredients[],
    steps: string[];
    servings: number;
    servingSizes: IServingSizes[];
    nutrients: INutrients;
    image: string;
    isLiked: boolean;
}

export interface I_Ingredients {
    name: string;
    servingSize: I_IngredientServingSize;
}

export interface I_IngredientServingSize {
    units: string;
    desc: string;
    qty: number;
    grams: number;
    scale: number;
}


export interface IServingSizes {
    scale: number;
    qty: number;
    grams: number;
    units: string;
    origialWeight: number;
    originalWeightUnits: string;
}

export interface INutrients {
    caloriesKCal: number;
    totalCarbs: number;
    protein: number;
    fat: number;
}