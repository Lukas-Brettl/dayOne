import { View, Text, Pressable } from "react-native";
import { ScaledSheet} from 'react-native-size-matters';


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
    return(
        <View className="items-center border-2 rounded-lg border-zinc-300" style={styles.View}>
            <View className=" border-b-2 border-zinc-300 justify-center z-10" style={styles.View2}>
                <Text className="text-white " style={styles.text1}>{habitName}</Text>
            </View>
            <View  className="w-full h-full absolute bg-red-400 items-start justify-end">
                <View>
                    <Text>XP: {habitInfo.XP}</Text>
                   
                    <View className="flex-row gap-2">
                    {
                        ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa' , 'Su'].map((item, index) =>
                            <Pressable key={index}
                             
                            style={{backgroundColor: habitInfo.frequency.includes(item)?"orange": "transparent"}}>
                                <Text>{item}</Text>
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
