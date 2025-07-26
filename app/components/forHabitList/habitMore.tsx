import { ReactNode, useState } from "react";
import { ScaledSheet, scale } from 'react-native-size-matters';
import { Text, View, ScrollView,  Modal, Pressable, Image, Dimensions } from "react-native";
import Level from "./level";
import Save from "../storage/oldStorage";


interface props{
    visible:boolean,
    handler:any
    name:string,
    more:{
        category:string
        XP: number,
        frequency: string[],
        lvl: number,
        lvlXP: number[],
        time?:string,
        info?: string[][]
    }
}

export default function HabitMore({visible, handler, name, more}:props){
    const [localFrequency, setLocalFrequency] = useState<string[]>(more.frequency ?? [])
    const days= ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa' , 'Su']

    //updating the frequency -> and color of button (day)
    const toggleDay = async (day: string) => {
        if (!localFrequency.includes(day)) {
            const updated = [...localFrequency, day]
            setLocalFrequency(updated)
            await Save({
                items: updated,
                what: 'frequency',
                where: [more.category, name],
                storageKey: 'habits'
            })
        } else {
            const updated = localFrequency.filter(d => d !== day)
            setLocalFrequency(updated)
            await Save({
                items: updated,
                what: 'frequency',
                where: [more.category, name],
                storageKey: 'habits'
            })
        }
    }
    return(
        <Modal
        backdropColor={'#1f1f1f'}
        visible={visible}
        animationType="slide"
        transparent={false}
        onRequestClose={() => handler()}
        >
        <View className="flex-1 ">
            <Pressable className="absolute z-10"
            onPress={()=>handler()} 
            style={styles.close}>
                <View className="justify-center items-center rounded-full p-2 aspect-square bg-[#0000006c]"><Text className="text-center text-white text-3xl font-bold">{'<'}</Text></View>
                
            </Pressable>

            {icons[name] && <Image className="absolute w-full" resizeMode="cover" source={icons[name]} style={styles.img}/>}
        <View className="flex-1 justify-between bg-[#1f1f1f]" style={styles.mainView}>
            <View className="flex-1">
                <View className="flex-row justify-between items-center">
                    <Text className="font-medium text-white" style={styles.text1}>{name}</Text> 
                    <Text className="text-[#0099FF] font-bold" style={styles.xp}>{more.XP} XP</Text>
                </View>
                <Text className="text-[#ACACAC]" style={styles.category}>{more.category}</Text>
                <Level lvl={more.lvl} lvlXP={more.lvlXP}/>
                <View className="gap-6">
                    {more.time&& 
                    <View className="flex-row items-center">
                        <Image source={require('../assets/image/icons/time_icon.png')} style={styles.icon}/>
                        <Text className="text-white font-medium" style={styles.iconText}>{more.time}</Text>
                    </View>}
                
                    {more.info&& displayMoreInfo()}
                </View>
            </View>
            <Text className="text-white font-medium" style={styles.frequencyText}>Days</Text>
            <View className="flex-row justify-between gap-2.5 " style={styles.frequency}>
                {
                days.map((item, index) =>
                    <Pressable key={index}
                    onPress={()=> {toggleDay(item)}}>
                       
                        <View className="justify-center items-center rounded-md absolute -z-20 translate-x-1 translate-y-1" style={{ backgroundColor: localFrequency.includes(item)?"#003F69": "#383838", width:scale(35), height:scale(35)}}></View>
                        <View  className="justify-center items-center rounded-md z-30"
                        style={{
                        backgroundColor: localFrequency.includes(item)?"#0099FF": "#525252",
                        width:scale(35), 
                        height:scale(35)}}>
                            <Text className="text-white font-medium" style={{ fontSize: scale(17)}}>{item}</Text>
                        </View>
                    </Pressable>)
                }
            </View>
            
        </View>
        </View>
        </Modal>
    )

    function displayMoreInfo(){

        if (!more.info) return null
        let content:any = []

        more.info.map((arr, index) =>{
            content.push(
            <View className="flex-row items-center" key={`${index}_moreInfo`}>
                {arr[0] ==="Distance"?
                <Image source={require('../assets/image/icons/distance_icon.png')} style={styles.icon}/>:
                <Text>{arr[0]}</Text>}
                <Text className="text-white font-medium" style={styles.iconText}>{arr[1]}</Text>
            </View>)
        })
        return content
    }
}
const icons:Record<string,any>={
    'Run': require("../assets/image/theme/run_theme.jpg"),
    'Exersise': require("../assets/image/theme/exersise_theme.jpg"),
    'Sleep': require("../assets/image/icons/sleep_icon.png"),
    'Screen': require("../assets/image/icons/screen_detox_icon.png"),
    'Read': require("../assets/image/icons/read_icon.png"),
    'Showers': require("../assets/image/icons/cold_shower_icon.png"),
    "Learn": require("../assets/image/icons/learning_icon.png"),
    'Custom': require("../assets/image/icons/custom_icon.png"),
    'Meditate': require("../assets/image/icons/meditation_icon.png"),
    'Clean': require("../assets/image/icons/clean_icon.png"),
    'Walk': require("../assets/image/icons/walk_icon.png"),
    'Edu': require("../assets/image/icons/edu_icon.png"),
    'Chess': require("../assets/image/icons/chess_icon.png"),
    'Business': require("../assets/image/icons/business_icon.png"),
    'Programming': require("../assets/image/icons/programming_icon.png"),
    'Language': require("../assets/image/icons/new_language_icon.png")
}
const styles = ScaledSheet.create({
    text1:{
        fontSize:'36@s'
    },
    category:{
        fontSize:'18@s',
        marginBottom:'30@vs'
    },
    mainView:{
        borderRadius:'55@s',
        marginTop:'200@s',
        paddingTop:'50@s',
        paddingInline: '25@s'
    },
    img:{
        height:'225@vs'
    },
    icon:{
        width:'40@s',
        height:'40@s',
        marginRight:'15@s'
    },
    iconText:{
        fontSize:'19@s'
    },
    close:{
       top:'45@vs',
       left:'20@s'
       
    },
    xp:{
        fontSize:'19@s'
    },
    frequency:{
        paddingBottom:'70@vs'
    },
    frequencyText:{
       fontSize:'22@s',
       paddingBottom:'15@vs'
    }
})