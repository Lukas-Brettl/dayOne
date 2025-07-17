
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";



export default async function Load(keyName:string){

    try {
        const raw = await AsyncStorage.getItem(keyName);
        return raw ? JSON.parse(raw) : null;
    } catch (error) {
        console.error("Chyba při načítání:", error);
        return null;
    }
}