import { useState } from "react";
import { ScaledSheet } from 'react-native-size-matters';
import { Text, View, ScrollView,  Modal, Pressable } from "react-native";
import Level from "./level";

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
        info: string[][]
    }
}

export default function HabitMore({visible, handler, name, more}:props){
    const [localFrequency, setLocalFrequency] = useState<string[]>(more.frequency ?? [])
    const days= ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa' , 'Su']

    return(
        <Modal
        backdropColor={'#1f1f1f'}
        visible={visible}
        animationType="slide"
        transparent={false}
        onRequestClose={() => handler()}
        >
        <View className="flex-1 " style={styles.mainView}>
            <Pressable onPress={()=>handler()}>
                <Text>close</Text>
            </Pressable>
            <View>
                <View className="flex-row justify-between">
                    <Text>{name}</Text> 
                    <Text>{more.XP}</Text>
                </View>
                <Level lvl={more.lvl} lvlXP={more.lvlXP}/>
                
            </View>
        
        </View>
        </Modal>
    )
}
const styles = ScaledSheet.create({
    mainView:{
        paddingTop:'50@s',
        paddingInline: '20@s'
    },})