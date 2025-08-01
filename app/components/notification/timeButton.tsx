import { TouchableOpacity } from "react-native";
import { View, Text } from "react-native-animatable"
import Load from "../storage/loadFromStorage";
import { useEffect, useState } from "react";
import TimePicker from "./timePicker";

interface props{
    habitName:string,
    category:string
}

export default function TimeButton({habitName, category}:props){
    
    const [time, setTime] = useState(new Date)
    const [displayModal, setDisplayModal] = useState(false)

    const loadTime = async () => {

        const loadedData =  await Load('habits')
        const timeString = loadedData[category][habitName]?.schedule
        if (timeString) setTime(new Date(timeString))
        
        setDisplayModal(false)

    }

    useEffect(()=>{
        loadTime()
    },[])

    return(
        <View>
            <TouchableOpacity onPress={() => setDisplayModal(true)}>
                <Text className="text-white">{time ? formatTime(time) : 'time'}</Text>
            </TouchableOpacity>
            {displayModal && <TimePicker load={loadTime} open={setDisplayModal} category={category} habitName={habitName}/>}
        </View>
    )
    function formatTime(date: Date): string {
        return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`
    }

}