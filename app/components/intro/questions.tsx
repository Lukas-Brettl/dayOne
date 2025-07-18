import { BottomTabBarHeightCallbackContext } from "@react-navigation/bottom-tabs"
import { useState } from "react"
import { Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"
import { ScaledSheet, scale} from 'react-native-size-matters'

interface Props{
    caption:string,
    answers:string[]
}

export default function Questions({caption, answers}: Props){

    const[changeStyle, setChangeStyle] = useState<string>('') // saves the item what's pressed

    return(
        <View className="flex-1  justify-around" style={styles.view}>
            <Text className="text-white  font-semibold" style={styles.text1}>{caption}</Text>
            <View className="flex-1 justify-center" style={styles.view2}>
                {answers.map((item, index) => {

                    const fullBorderStyle = {
                        width: scale(220),
                        height:scale(50),
                        transform: [
                            { translateX: item == changeStyle?-6 :-9 },
                            { translateY: item == changeStyle?5 :0 }
                        ],
                        backgroundColor: item == changeStyle?'white' : '#434343',
                        
                    }
                    const textstyle = {
                        fontSize: scale(18),
                        color: item == changeStyle?'black' : 'white'
                    }

                   return( 
                   <TouchableWithoutFeedback 
                   onPress={()=> setChangeStyle(item)}
                   key={index-0.5}>
                        <View className="justify-end rounded-xl   border-8 border-zinc-700" style={styles.view3}>
                            <View className="justify-center bg-[#434343] p-2 border-2 border-neutral-400 rounded-lg " style={fullBorderStyle}>
                                <Text className="text-white font-medium ml-4" style={textstyle} key={index}>{item}</Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>)
                    })}
            </View>
        </View>
    )
}
const styles = ScaledSheet.create({

    text1:{
        paddingTop:'40@s',
        fontSize: '27@s',
    },
    view:{
         paddingInline:'14@s'
    },
    view2:{
        gap: '20@s',
        paddingBottom: '50@s',
        paddingLeft:'20@s'
    },
    view3:{
        width: '224@s',
        height:'54@s'
    },
    view4:{
        width: '220@s',
        height:'50@s'
    },

})