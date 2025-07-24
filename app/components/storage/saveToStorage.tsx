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
    'time'?: string,
    'info'?:string[][]
}

type userType={
    'lvl':number,
    'streak':number,
    'lvlXP':number[],
    'goal':number,
    'firstLaunch':Date
}

type allowedKeyNames = 'user' | 'habits' | 'medals' |'schedule'
type keys = {
    user: Record<string, Record<string, Record<string, userType>>>,
    habits: Record<string, Record<string, habitInfo>>,
    medals:Record<string, Record<string, string>>,
    schedule:Record<string, Record<string, string | number>>
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

        if (!where) data = items
        else{
        

        //It goes through each key in the 'where' array
        for(let i:number = 0; i <where.length -1; i++){

            if(!current[where[i]]){
                current[where[i]] = {}
            }
            current = current[where[i]]

            i++
        }
        current[where[where.length - 1]] = items;}
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