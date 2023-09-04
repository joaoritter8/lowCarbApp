import { useState, useEffect } from "react";
import axios from "axios";

import * as Device from 'expo-device';

import downloadImage from "./getImage";

import { IRecipe } from "../interfaces/recipe";

import testResponse from "../testResponse.json"


const useFetch = (endpoint: string, query: any) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://low-carb-recipes.p.rapidapi.com/${endpoint}`,
        params: { ...query },
        headers: {
            'X-RapidAPI-Key': '1d75d9b66cmshbbc4565e17c03c4p10ee40jsnc7d375c03e33',
            'X-RapidAPI-Host': 'low-carb-recipes.p.rapidapi.com'
        },
    };

    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = async () => {
        setIsLoading(true);

        try {
            //const response = await axios.request(options);
            const response = {
                data: testResponse,
                status: 200,
                statusText: 'OK',
                headers: {},
                config: {},
                request: {}
            }
            if (Device.osName == 'Android') {
                response.data.map((item: any) => {
                    downloadImage(item.image, item.id);
                })
            }

            setData(response.data);
            setIsLoading(false);
            //console.log(response.data);
        } catch (error: any) {
            setError(error);
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }


    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return { data, isLoading, error, refetch };
}

export default useFetch
