import { Text } from "react-native";
import { View } from "react-native-animatable";
import { ScaledSheet,scale  } from 'react-native-size-matters';

interface props{
    lvl:number,
    lvlXP:number[]
}

export  default function Level({lvl, lvlXP}:props){
    return(
        <View className="w-full gap-2" style={styles.mainView}>
            <View className="p-2 justify-center items-center bg-[#1c2a33] rounded-xl" style={styles.View1}>
                <Text className="font-semibold text-[#0099FF]" style={styles.lvl}>LEVEL {lvl}</Text>
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
                <Text className="text-[#ACACAC]" style={styles.Xp}>{lvlXP[0]} / {lvlXP[1]} XP</Text>
            </View>
        </View>
    )
}
const styles = ScaledSheet.create({
    mainView:{
        paddingBottom:'50@vs',

    },
    lvl:{
        fontSize: '22@s',
    },
    streak: {
        fontSize: '20@s',
    },
    Xp:{
        fontSize: '15@s',
    },
    View1:{
       width:'101@s'
    },
    XpContainer:{

    },
    XpProgres:{
        height:'10@vs',
        width:'100%'
    }
})