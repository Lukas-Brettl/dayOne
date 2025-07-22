
import AsyncStorage from '@react-native-async-storage/async-storage';




export default async function Load(keyName:string){

    try {
        const raw = await AsyncStorage.getItem(keyName);
        return raw ? JSON.parse(raw) : 'something wong';
    } catch (error) {
        console.error("error with loading", error);
        return null;
    }
}