import DateTimePicker from '@react-native-community/datetimepicker'
import { Platform, TouchableOpacity } from 'react-native'
import { ScaledSheet} from 'react-native-size-matters';
import { useState } from 'react'
import { Modal, Text } from 'react-native'
import { View } from 'react-native-animatable'
import SaveToStorage from '../storage/saveToStorage';

interface props{
    load:any,
    open: any,
    category: string,
    habitName:string
}

export default function TimePicker({load, open, category, habitName}:props){
    const [time, setTime] = useState(new Date)

    const saveTime = async () =>{
        await SaveToStorage({items:time, keyName:'habits', where:[category, habitName, 'schedule']})
        load()
    }

    return(
        <Modal
        animationType="fade"
        transparent={true}
        onRequestClose={() => open(false)}
        >
        <View className='w-full h-full bg-[#000000bb] items-center justify-center'>
        <View className='bg-[#1f1f1f] rounded-lg z-30' style={styles.mainView}>

            {Platform.OS === 'ios' &&


            <View className='flex-row justify-between pt-1 items-center'>
                <TouchableOpacity onPress={()=> open(false)}>
                    <Text className='font-medium text-[#f2a90a]' style={styles.button}>close</Text>
                </TouchableOpacity>

                <Text className='text-center text-white font-medium' style={styles.text1}>Set time</Text>

                <TouchableOpacity onPress={()=> saveTime()}>
                    <Text className='font-medium text-[#f2a90a]' style={styles.button}>save</Text>
                </TouchableOpacity>
                
            </View>
            }
            
            <DateTimePicker
                value={time}
                mode="time"
                display={Platform.OS === 'ios'?"spinner":'clock'} // nebo 'default', 'clock', 'spinner'
                onChange={(event, data) =>{
                    if(data) setTime(data)
                }}
                is24Hour={true} // změň na false pro 12h formát
            />
            <View className='items-center'>
                <TouchableOpacity className='justify-center items-center bg-[#2d2d2e] w-full rounded-md' style={styles.deleteButton}>
                    <Text className='text-center text-[#d1352d] font-medium' style={styles.text2}>Delete notification</Text>
                </TouchableOpacity>
            </View>
            
        </View>
        </View>
        </Modal>
        
    )
}

const styles = ScaledSheet.create({
    text1:{
        fontSize:'25@s'
    },
    text2:{
        fontSize:'15@s'
    },
  
    mainView:{
        paddingTop:'10@s',
        paddingInline: '15@s'
    },
    
    button:{
        fontSize:'16@s'
    },

    deleteButton:{
        height:'40@vs',
        marginTop:'40@vs',
        marginBottom:'20@vs'
    },

})