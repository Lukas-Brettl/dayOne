import Load from "./loadFromStorage";
import SaveToStorage from "./saveToStorage";

export default async function Schedule(days:string[], category:string, nameHabit:string):Promise<void>{
    
    const loadedHabitsData = await Load('habits')
    const loadedScheduleData = await Load('schedule') as Record<string, Record<string, { XP: number, time?: string }>>
    const habit = loadedHabitsData[category][nameHabit]
    
    let dataToSave = {...loadedScheduleData}
    
    
    for(const [day, singlehabit] of Object.entries(dataToSave)){
        if(singlehabit[nameHabit]){
            delete singlehabit[nameHabit]
        }
    }
    
    days.forEach(day => {
        if(!dataToSave[day]){
            dataToSave[day] = {}
        }
        dataToSave[day][nameHabit] = {
            'time': habit['time'],
            'XP': habit['XP']
        }
    })

    
    SaveToStorage({
        items:dataToSave,
        keyName:'schedule'
        })
}