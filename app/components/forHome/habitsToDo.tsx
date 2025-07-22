import { View, Text, ScrollView, TouchableOpacity, Animated } from "react-native";
import { ScaledSheet } from 'react-native-size-matters';
import Card from './habitCardFH'
import { useState, useRef, useEffect } from "react";

interface props{
    data:Record<string,string|number>
}

export default function ToDo({data}:props){

    const[click, setClick] = useState<boolean>(true)

    const expand = useRef(new Animated.Value(0)).current
    
    useEffect(() => {
        Animated.timing(expand, {
        toValue: click ? 0 : 1, 
        duration: 200,
        useNativeDriver: false, 
        }).start();
    }, [click])

    const widthAnim = expand.interpolate({
        inputRange: [0, 1],
        outputRange: ['0%', '50%'],
    });

    function displayHabits(){
        let render = []
        const now = new Date()
        const today = now.getDay()
        const days: Record<number,string>={
            0:'Su',
            1:'Mo',
            2:'Tu',
            3:'We',
            4:'Th',
            5:'Fr',
            6:'Sa'
        }
        if(!data[days[today]]) console.log('asdas')
        if(!data[days[today]]) return null

        for(let [key, item] of Object.entries(data[days[today]])){
            render.push(<Card key={key} name={key} time={item['time']} xp={item['XP']}/>)
        }
        return render
    }

    function dislpayMissions(){

    }
    return(
        <View style={styles.mainView}>
            <View className="flex-row">
                <TouchableOpacity className="w-1/2 justify-center items-center"
                onPress={()=> setClick(true)}>
                    <Text className="text-center text-white font-medium" style={styles.text}>To-do</Text>
                </TouchableOpacity>

                <TouchableOpacity className="w-1/2 justify-center items-center"
                onPress={()=> setClick(false)}>
                <Text className="text-center text-white font-medium " style={styles.text}>Missions</Text>
                </TouchableOpacity>
            </View>
            <View className="flex-row bg-[#434343] w-full h-1 rounded-lg" style={styles.ViewProgress}>
                <Animated.View className="h-1" style={{
                    width: widthAnim
                }}></Animated.View>
                <View className="bg-[#0099ff] w-1/2 h-1 rounded-lg z-10"></View>
            </View>
            <ScrollView className=" h-full">
                {click&& displayHabits()}
            </ScrollView>
            
        </View>
    )
}
const styles = ScaledSheet.create({
    text:{
        fontSize:'22@s',
        paddingBottom:'8@vs'
    },
    mainView:{
        paddingTop:'70@vs',
       
    },
    ViewProgress:{
        marginBottom:'20@vs'
    }
})