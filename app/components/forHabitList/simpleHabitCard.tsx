import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
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
        time?:string,
        info?: string[][]
    }
}

export default function SimpleCard({habitName, habitMore, handler}:props){




    return(
        <TouchableOpacity onPress={() => handler(habitName, habitMore)}>
        <View className="items-center justify-around bg-[#2A2A2A] rounded-xl" style={styles.View}>
            {icons[habitName] && <Image className=""  source={icons[habitName]} style={styles.image}/>}
                <Text className="text-center text-white" 
                numberOfLines={1}
                ellipsizeMode="tail"
                style={styles.text1}>
                    {habitName}
                </Text>
        </View>
        </TouchableOpacity>
    )

}
const icons:Record<string,any>={
    'Run': require("../assets/image/icons/run_icon.png"),
    'Exersise': require("../assets/image/icons/exersise_icon.png"),
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
        width: '108@s',
        fontSize: '24@s',
    },
    text2:{
        fontSize: '17@s',
    },
    View:{
        padding: '6@s',
        width: '120@s',
        height: '120@s' //'60@vs' default
    },
    View2:{
        paddingBlock:'10@s'
  },
  image:{
        width:'60@s',
        height:'60@s'
  }
})