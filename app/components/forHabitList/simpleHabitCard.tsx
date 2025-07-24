import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { ScaledSheet} from 'react-native-size-matters';

interface props{
    habitName: string,
    handler:any //idk why void type isn't working
    habitMore:{
        category:string
        XP: number,
        frequency: string[],
        lvl: number,
        lvlXP: number[],
        info: string[][]
    }
}

export default function SimpleCard({habitName, habitMore, handler}:props){

    return(
        <TouchableOpacity onPress={() => handler(habitName, habitMore)}>
        <View className="items-center justify-end bg-[#2A2A2A] rounded-xl" style={styles.View}>
            <></>
            <View  style={styles.View2}>
                <Text className="text-white" 
                numberOfLines={1}
                ellipsizeMode="tail"
                style={styles.text1}>
                    {habitName}
                </Text>
            </View>
            <View className="w-full flex-row justify-between">
                <Text className="text-[#ACACAC] font-light" style={styles.text2}>{habitMore['XP']} XP</Text>
                <Text className="text-[#0099ff] font-bold" style={styles.text2}>{habitMore['lvl']}lvl</Text>
            </View>

        </View>
        </TouchableOpacity>
    )
}
const styles = ScaledSheet.create({

    text1:{
        width: '108@s',
        fontSize: '24@s',
    },
    text2:{
        fontSize: '17@s',
    },
    View:{
        padding: '6@s',
        width: '120@s',
        height: '160@s' //'60@vs' default
    },
    View2:{
        paddingBlock:'10@s'
  }
})