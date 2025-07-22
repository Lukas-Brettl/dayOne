import { Text, View } from "react-native";
import { ScaledSheet } from 'react-native-size-matters';

interface props{
    day: number,
    goal: number
}

export default function Counter({day, goal}:props){
    return(
        <View className="gap-1">
            <Text className="text-white font-semibold" style={styles.text1}>Day {day}</Text>
            <Text className="text-[#ACACAC]" style={styles.text2}>{goal-day} day{goal-day>1 &&'s'} left</Text>
        </View>
    )
}
const styles = ScaledSheet.create({
    text1:{
        fontSize: '45@s',
    },
    text2:{
        fontSize: '18@s',
    },

})