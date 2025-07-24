import { View, Text, Pressable } from "react-native";
import { ScaledSheet, scale} from 'react-native-size-matters';
import Save from "../storage/oldStorage";
import { useState } from "react";


interface props{
    habitName:string,
    habitInfo:{
        category:string
        XP: number,
        frequency: string[],
        lvl: number,
        lvlXP: number[],
        info: string[][]
    }
}
export default function Card({habitName, habitInfo}: props){
    const [localFrequency, setLocalFrequency] = useState<string[]>(habitInfo.frequency ?? [])
    const days= ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa' , 'Su']

    function display(array: string[][]) {
    return array.map((element, i) => (
        <View className="flex-row" key={`${i}_View`}>
        <Text>{String(element[0])}</Text>
        <Text>{String(element[1])}</Text>
        </View>
    ))
    }
        
   

    const toggleDay = async (day: string) => {
        if (!localFrequency.includes(day)) {
            const updated = [...localFrequency, day]
            setLocalFrequency(updated)
            await Save({
                items: updated,
                what: 'frequency',
                where: [habitInfo.category, habitName],
                storageKey: 'habits'
            })
        } else {
            const updated = localFrequency.filter(d => d !== day)
            setLocalFrequency(updated)
            await Save({
                items: updated,
                what: 'frequency',
                where: [habitInfo.category, habitName],
                storageKey: 'habits'
            })
        }
    }
    return(
        <View className="items-center border-2 rounded-lg border-zinc-300" style={styles.View}>
            <View className="flex-row border-b-2 border-zinc-300 items-center z-10" style={styles.View2}>
                <Text className="text-white " style={styles.text1}>{habitName}</Text>
              {/* <View className="flex-row">
                    {
                        days.filter(item => localFrequency.includes(item))
                            .map((item,index, array)=>{
                             
                                return( 
                                <Text key={index}>
                                    {item}{index < array.length - 1 ? ', ' : ''}
                                </Text>)
                            }
                        )
                    }
                    </View>*/} 
            </View>
            <View  className="w-full h-full absolute bg-red-400 items-start justify-end">
                <View>
                    {display(habitInfo.info)}
                    <Text>XP: {habitInfo.XP}</Text>
                   
                    <View className="flex-row gap-2">
                    {
                        days.map((item, index) =>
                            <Pressable key={index}
                            
                            onPress={()=> {toggleDay(item)}}
                            className="justify-center items-center rounded-md border border-white"
                            style={{backgroundColor: localFrequency.includes(item)?"orange": "transparent", width:scale(30), height:scale(30)}}>
                                <Text style={{ fontSize: scale(17)}}>{item}</Text>
                            </Pressable>)
                    }
                    </View>
                </View>
                
            </View>
        
        </View>
    )
}

const styles = ScaledSheet.create({

    text1:{
        paddingLeft: '15@s',
        fontSize: '19@s',
    },
    View:{
        width: '260@s',
        height: '180@vs' //'60@vs' default
    },
    View2:{
        width: '260@s',
        height: '60@vs'
  }
})
