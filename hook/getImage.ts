import { useState, useEffect } from "react";
import axios from "axios";
import * as FileSystem from 'expo-file-system';


const downloadImage = async (endpoint: string, id: string) => {
    const localPath = `${FileSystem.cacheDirectory+id}.png`;
    const response = await axios.get(endpoint, { responseType: 'arraybuffer' });
    try {
        await FileSystem.downloadAsync(endpoint, localPath, {cache:true});               
        return
      } catch (error) {
        console.error('Erro ao salvar a imagem:', error);
        return
      }
};
   

export default downloadImage
