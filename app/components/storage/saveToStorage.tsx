import Load from "./loadFromStorage"
import AsyncStorage from "@react-native-async-storage/async-storage"
import dataHabitsInfo from './dataHabitsInfo.json'

const habits = [
    'running', 'exersise', 'quality sleep', 'screen time', 'reading books',
    'cold showers', 'drinking water', "learning", 'custom hobby',
    'meditation', 'journaling', 'cleaning room', 'walking', 'edu (neco jako pustit si podcast nebo neco)', 'chess', 'bussines', 'programming', 'new language (uceni se ciziho jazyka)'
  ];

interface props<K extends allowedKeyNames>{
    items:any,
    keyName:K
    where?:string[],
    newHabit?:boolean
}

type habitInfo={
    'category':string,
    'XP':number,
    'frequency':string[],
    'lvl':number,
    'lvlXP':number[],
    'info':string[][]
}
type allowedKeyNames = 'user' | 'habits' | 'medals' |'schedule'
type keys = {
    user: Record<string, Record<string, Record<string, string>>>,
    habits: Record<string, Record<string, habitInfo>>,
    medals:Record<string, Record<string, string>>,
    schedule:Record<string, Record<string, string>>
}

export default async function SaveToStorage<K extends allowedKeyNames>({items, keyName, where, newHabit}:props<K>){
    

    const loaditems = await Load(keyName)
    let data: keys[K] = loaditems?loaditems:{}

    if (
        newHabit &&
        Array.isArray(items) &&
        items.every((i) => typeof i === "string")
    ){
        const constDataHabitsInfo:Record<string,habitInfo> = dataHabitsInfo
        items.forEach((item:string) => {
            if (habits.includes(item) ){
            const  specificHabit = constDataHabitsInfo[item]

            if(specificHabit){
                const {category} = specificHabit
                if(!data[category]){
                    data[category] = {}
                }
                data[category][item] = specificHabit
            }
        }})
        
    }


    else{

        let current: any = data

        const place = where!

        //It goes through each key in the 'where' array
        for(let i:number = 0; i <place.length -1; i++){

            if(!current[place[i]]){
                current[place[i]] = {}
            }
            current = current[place[i]]

            i++
        }
        current[place[place.length - 1]] = items;
    }

    //saving
    try {
        const json = JSON.stringify(data);
        await AsyncStorage.setItem(keyName, json);
        console.log(loaditems);
    } catch (e) {
        console.error('Saving failed:', e)
    }

}