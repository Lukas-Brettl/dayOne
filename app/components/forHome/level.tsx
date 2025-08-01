import { Image, Text } from "react-native";
import { View } from "react-native-animatable";
import { ScaledSheet,scale  } from 'react-native-size-matters';

interface props{
    lvl:number,
    streak:number,
    lvlXP:[number,number]
}

export  default function Level({lvl, streak, lvlXP}:props){
    return(
        <View className="w-full gap-1" style={styles.mainView}>
            <View className="flex-row justify-between items-center" style={styles.View1}>
                <Text className="font-medium text-white" style={styles.lvl}>Level {lvl}</Text>
                <View className="flex-row items-center gap-1">
                    <Text className="text-white font-medium" style={styles.streak}>{streak}</Text>
                    <Image source={require('../assets/image/icons/streak_icon.png')} style={styles.streakIcon}/>
                </View>
            </View>
            <View>
                <View className="w-full items-start justify-center bg-[#434343] rounded-2xl" style={styles.XpProgres}>
                    <View className="bg-[#0099ff] rounded-2xl" style={{
                    height:scale(10),
                    width: `${(100 * lvlXP[0]) / lvlXP[1]}%`
                    }}></View>
                </View>
            </View>
            <View>
                <Text className="text-[#ACACAC]" style={styles.Xp}>{lvlXP[0]}/{lvlXP[1]} XP</Text>
            </View>
        </View>
    )
}
const styles = ScaledSheet.create({
    mainView:{
        paddingBottom:'50@vs',

    },
    lvl:{
        fontSize: '27@s',
    },
    streak: {
        fontSize: '23@s',
    },
    streakIcon:{
        width:'30@s',
        height:'30@s'
    },
    Xp:{
        fontSize: '15@s',
    },
    View1:{
       
    },
    XpContainer:{

    },
    XpProgres:{
        height:'10@vs',
        width:'100%'
    }
})