import { View, Text } from "react-native";
import { ScaledSheet } from 'react-native-size-matters';

interface props{
    name:string,
    time:string,
    xp:number
}

export default function Card({name, time, xp}:props){

    return(
        <View className="bg-[#2A2A2A] rounded-lg justify-center" style={styles.View}>
            <View></View>
            <View className="flex-1 flex-row items-center justify-between" style={styles.View2}>
                <View>
                    <Text className="text-white" style={styles.text1}>{name}</Text>
                    <Text className="font-light text-[#ACACAC]" style={styles.time}>{time}</Text>
                </View>
                <Text className="font-bold text-[#0099ff]" style={styles.xp}>{xp} XP</Text>
            </View>
        </View>
    )
}
const styles = ScaledSheet.create({
    View:{
        height: '65@vs',
    },
    View2:{
        paddingInline:'20@s'
    },
    text1:{
        fontSize: '25@s',
    },
    time:{
        fontSize: '16@s',
    },
    xp:{
        fontSize: '18@s',
    },

})