import { Text, SafeAreaView, View, Image, Button, TouchableOpacity} from "react-native";
import { ImageSourcePropType } from "react-native";
import { scale, ScaledSheet, verticalScale} from 'react-native-size-matters';
import Slider from '@react-native-community/slider'
import MyButton from "../button"
import * as Haptics from 'expo-haptics';
import { Link } from 'expo-router';
import { useState } from "react";


interface Props{
    min: {
        num:number,
        message:string,
    }
    max: {
        num:number,
        message:string,
    }
    step:number,
    text:string,
    img:ImageSourcePropType
}

export default function Select({min, max, step, text, img}:Props){
    const [selectedVal, setSelectedVal] = useState(1)

    return(
        <SafeAreaView className="w-full h-full bg-[#1A1A1A]  justify-center items-center">
            
            <View className="w-full p-5 mt-16 items-start">
                <Text  className="text-white text-4xl font-medium p-1 italic">
                    {text}
                </Text>
            </View>

            <View className="flex-row w-full items-center justify-between" style={styles.view2}>
                <Image
                    className="min-w-28 aspect-square"
                    source={img}
                />
                
                <View className=" items-center" style={styles.view3}>  
                    {  
                        selectedVal === min.num? <Text className="text-white" style={styles.text2}> {min.message}</Text>: 
                        selectedVal === max.num? <Text className="text-white" style={styles.text2}> {max.message}</Text>: <Text className="text-white" style={styles.text2}>{selectedVal  + " km/week"}</Text>
                    } 
                </View>
                
            </View>
            
            <Slider

                style={styles.slider}
                value={selectedVal}
                minimumValue={min.num}
                maximumValue={max.num}
                step={step}
                minimumTrackTintColor="#FF6500"
                maximumTrackTintColor="#8B4325"
                onValueChange={(val)=> {
                    setSelectedVal(val)
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
                }}
              
                />
            
            <View className="flex-1 flex-row w-full h-80 justify-center items-start" style={styles.view4}> 
                <View className=" flex-row items-center" style={styles.view5}> 
                    <Link className="text-gray-400 underline-offset-2 underline" href="/(tabs)" style={styles.link}>← previous</Link>

                <MyButton text='submit'/>
                </View>
            </View>

            
        </SafeAreaView>
    )

}
const styles = ScaledSheet.create({
        text2:{
            fontSize: '22@s',
        },
        text3:{
            fontSize:'16@s'
        },
        view2:{
            paddingTop:'80@vs',
            paddingInline:'55@s'
        },
        view3:{
            width:'140@s'
        },
        view4:{
            paddingTop: '40@vs'
        },
        view5:{
            gap:'40@s',   
        },
        slider:{
            width: '240@s', 
            height: '100@s'
        },
        button:{
            width: '150@s',
            height:'45@vs',
            
        },
        link:{
            fontSize: '17@s'
        }
    })