import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { LikedContext } from '../contexts/liked';

import * as Device from 'expo-device';

import downloadImage from "./getImage";

import { IRecipe } from "../interfaces/recipe";

import testResponse from "../testResponse.json"


const getRecipeID = (liked: Array<string>) => {
    const [data, setData] = useState<any>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);       

    const json = testResponse

    const options = (id: string) => {

        return{
            method: 'GET',
            url: `https://low-carb-recipes.p.rapidapi.com/recipes/${id}`,
            headers: {
                'X-RapidAPI-Key': '1d75d9b66cmshbbc4565e17c03c4p10ee40jsnc7d375c03e33',
                'X-RapidAPI-Host': 'low-carb-recipes.p.rapidapi.com'
            }, 
        }   
          
    };

    useEffect(() => {
        fetchData();
    },[]);


    const fetchData = async () => {
        setIsLoading(true);
        
        try {

            for(const id of liked){
                const response = await axios.request(options(id));
                console.log("data: ", [...data, response.data])
                setData([...data, response.data]); 
            }                                       
          
            //console.log(response.data);
        } catch (error: any) {
            setError(error);
            console.error(error);
        }finally {
            setIsLoading(false);
        }
    }

   
    const refetch = () => {    
        fetchData();
    }

    return { data, isLoading, error, refetch };
}

export default getRecipeID
