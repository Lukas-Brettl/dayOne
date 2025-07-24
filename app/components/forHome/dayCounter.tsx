import { Text, View } from "react-native";
import { ScaledSheet } from 'react-native-size-matters';

interface props{
    firstLaunch: Date,
    goal: number
}

export default function Counter({firstLaunch, goal}:props){
    
    //this do some magic with dates 
    //function display days from firstLaunch and days that left from goal
    function displayDays(){
        const oneDayMs = 1000 * 60 * 60 * 24
        const today =  new Date()
        const diffMs = Math.abs(today.getTime() - new Date(firstLaunch).getTime())
        const days = Math.floor(diffMs / oneDayMs) +1
        return(
            <View className="gap-1">
                <Text className="text-white font-semibold" style={styles.text1}>Day {days}</Text>
                <Text className="text-[#ACACAC]" style={styles.text2}>{goal-days} day{goal-days>1 &&'s'} left</Text>
            </View>)
    }

    return(displayDays())
}
const styles = ScaledSheet.create({
    text1:{
        fontSize: '45@s',
    },
    text2:{
        fontSize: '18@s',
    },

})