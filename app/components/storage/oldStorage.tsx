import AsyncStorage from '@react-native-async-storage/async-storage';
import Load from './loadFromStorage';

const habitInfo : { [key: string]: habitInfoType }={
        "running": {
            "category": "Energy",
            "XP": 20,
            "frequency": ["Mo", "We", "Fr"],
            "lvl": 2,
            "lvlXP": [240,300],
            "info": [["Distance", "5 km"], ["Duration", "30 min"]]
        },
        "exersise": {
            "category": "Energy",
            "XP": 18,
            "frequency": ["Tu", "Th", "Sa"],
            "lvl": 1,
            "lvlXP": [100, 150],
            "info": [["Workout Type", "Full Body"], ["Duration", "25 min"]]
        },
        "quality sleep": {
            "category": "Energy",
            "XP": 15,
            "frequency": ["Mo", "Tu", "We", "Th", "Fr"],
            "lvl": 3,
            "lvlXP": [310, 400],
            "info": [["Sleep Goal", "8 hrs"], ["Bedtime", "22:30"]]
        },
        "screen time": {
            "category": "Wellness",
            "XP": 10,
            "frequency": [
            "Mo",
            "Tu",
            "We",
            "Th",
            "Fr"
            ],
            "lvl": 2,
            "lvlXP": [
            150,
            200
            ],
            "info": [
            [
                "Limit",
                "2 hrs"
            ],
            [
                "Actual",
                "1.5 hrs"
            ]
            ]
        },
        "reading books": {
            "category": "Growth",
            "XP": 15,
            "frequency": [
            "Mo",
            "Tu",
            "Fr"
            ],
            "lvl": 1,
            "lvlXP": [
            80,
            150
            ],
            "info": [
            [
                "Pages",
                "20"
            ],
            [
                "Book",
                "Atomic Habits"
            ]
            ]
        },
        "cold showers": {
            "category": "Energy",
            "XP": 12,
            "frequency": [
            "Mo",
            "Tu",
            "We",
            "Th",
            "Fr"
            ],
            "lvl": 2,
            "lvlXP": [
            190,
            250
            ],
            "info": [
            [
                "Duration",
                "1 min"
            ],
            [
                "Temperature",
                "15\u00b0C"
            ]
            ]
        },
        "drinking water": {
            "category": "Energy",
            "XP": 10,
            "frequency": [
            "Mo",
            "Tu",
            "We",
            "Th",
            "Fr",
            "Sa",
            "Su"
            ],
            "lvl": 2,
            "lvlXP": [
            120,
            200
            ],
            "info": [
            [
                "Target",
                "2.5 L"
            ],
            [
                "Glasses",
                "10"
            ]
            ]
        },
        "learning": {
            "category": "Growth",
            "XP": 17,
            "frequency": [
            "Mo",
            "We",
            "Fr"
            ],
            "lvl": 3,
            "lvlXP": [
            290,
            350
            ],
            "info": [
            [
                "Topic",
                "History"
            ],
            [
                "Time",
                "30 min"
            ]
            ]
        },
        "custom hobby": {
            "category": "Lifestyle", 
            "XP": 14,
            "frequency": [
            "Sa",
            "Su"
            ],
            "lvl": 1,
            "lvlXP": [
            50,
            100
            ],
            "info": [
            [
                "Activity",
                "Painting"
            ],
            [
                "Time",
                "1 hr"
            ]
            ]
        },
        "meditation": {
            "category": "Wellness",
            "XP": 10,
            "frequency": [
            "Tu",
            "Th",
            "Sa"
            ],
            "lvl": 3,
            "lvlXP": [
            310,
            400
            ],
            "info": [
            [
                "Time",
                "15 min"
            ],
            [
                "Technique",
                "Breathing"
            ]
            ]
        },
        "journaling": {
            "category": "Wellness",
            "XP": 12,
            "frequency": [
            "Mo",
            "We",
            "Fr"
            ],
            "lvl": 1,
            "lvlXP": [
            70,
            130
            ],
            "info": [
            [
                "Duration",
                "10 min"
            ],
            [
                "Focus",
                "Gratitude"
            ]
            ]
        },
        "cleaning room": {
            "category": "Lifestyle",
            "XP": 13,
            "frequency": [
            "Sa",
            "Su"
            ],
            "lvl": 2,
            "lvlXP": [
            180,
            230
            ],
            "info": [
            [
                "Time",
                "30 min"
            ],
            [
                "Focus Area",
                "Desk & Floor"
            ]
            ]
        },
        "walking": {
            "category": "Balance",
            "XP": 10,
            "frequency": [
            "Mo",
            "Tu",
            "We",
            "Th",
            "Fr"
            ],
            "lvl": 1,
            "lvlXP": [
            90,
            140
            ],
            "info": [
            [
                "Steps",
                "6000"
            ],
            [
                "Duration",
                "45 min"
            ]
            ]
        },
        "edu": {
            "category": "Productivity",
            "XP": 11,
            "frequency": [
            "Tu",
            "Th"
            ],
            "lvl": 2,
            "lvlXP": [
            160,
            220
            ],
            "info": [
            [
                "Format",
                "Podcast"
            ],
            [
                "Duration",
                "25 min"
            ]
            ]
        },
        "chess": {
            "category": "Growth",
            "XP": 14,
            "frequency": [
            "Fr",
            "Sa"
            ],
            "lvl": 2,
            "lvlXP": [
            200,
            270
            ],
            "info": [
            [
                "Game Time",
                "30 min"
            ],
            [
                "Mode",
                "Rapid"
            ]
            ]
        },
        "bussines": {
            "category": "Productivity",
            "XP": 20,
            "frequency": [
            "Mo",
            "We",
            "Fr"
            ],
            "lvl": 4,
            "lvlXP": [
            420,
            500
            ],
            "info": [
            [
                "Focus",
                "Marketing"
            ],
            [
                "Duration",
                "1 hr"
            ]
            ]
        },
        "programming": {
            "category": "Productivity",
            "XP": 19,
            "frequency": [
            "Tu",
            "Th",
            "Sa"
            ],
            "lvl": 3,
            "lvlXP": [
            310,
            380
            ],
            "info": [
            [
                "Language",
                "JavaScript"
            ],
            [
                "Project",
                "Habit Tracker App"
            ]
            ]
        },
        "new language": {
            "category": "Growth",
            "XP": 18,
            "frequency": [
            "Mo",
            "We",
            "Su"
            ],
            "lvl": 4,
            "lvlXP": [
            440,
            600
            ],
            "info": [
            [
                "Language",
                "Spanish"
            ],
            [
                "Time",
                "30 min"
            ]
            ]
        }
    }

interface props{
    items:string[],
    what:string,
    where?:string[]
    storageKey:string
}

type habitInfoType = {
    category:string
    XP: number,
    frequency: string[],
    lvl: number,
    lvlXP: number[],
    info: string[][]
}

//things saving to asyncStorage


export default async function Save({items, what, where, storageKey}:props){

    
    let data:Record<string,Record<string,habitInfoType>>  = {}

    
    switch(what){
        case 'habits':{

            //save new habits
            items.forEach(item => {
                const  specificHabit = habitInfo[item]

                if(specificHabit){
                    const {category} = specificHabit
                    if(!data[category]){
                        data[category] = {}
                    }
                    data[category][item] = specificHabit
                }
            })
            break
        }

        case 'frequency':{
            if (!where) return null
            let loadedData = await Load('habits')
            loadedData[where[0]][where[1]].frequency = items
            data = loadedData
            console.log('sdasd')
            console.log(data[where[0]][where[1]].frequency)
            break
        }
        default:{
            console.log('parameter (what) is invalid')
            break
        }
    }




    try {
        const json = JSON.stringify(data);
        await AsyncStorage.setItem(storageKey, json);
        console.log(data);
    } catch (e) {
        console.error('Saving failed:', e)
    }
}