import { useRef, useState } from "react";
import { ScaledSheet} from 'react-native-size-matters';
import { Text, TouchableOpacity, View } from "react-native";
import MyButton from '../components/button'


export default function SelectAge(){

    const[age, setAge] = useState<number>(18)

    const intervalRef = useRef<number | null>(null)

    function handlePressIn(type:string){
        intervalRef.current = setInterval(() => {
            setAge(prevAge => {
                if (type === 'plus' && prevAge < 80) {
                    return prevAge + 1;
                } else if (type === 'minus' && prevAge > 1) {
                    return prevAge - 1;
                }
                return prevAge;
                })
        }, 100);
    }

    function handlePress(type:string):void{
        if(type === 'plus' && age < 80){
            setAge(age + 1)
        }
        else if (type === 'minus' && age > 1){
            setAge(age - 1)
        }
    }

    return(
        <View className="flex-1" style={styles.view}>
            <Text className="text-white font-semibold" style={styles.text1}>Select your age</Text>
            <Text className="text-zinc-400 " style={styles.text2}>Select your <Text className="text-white font-bold">real age</Text> the app is not age limited</Text>
            
            <View className="flex-1 justify-end items-center" style={styles.view2}>
                <View className="flex-1 items-center justify-center">
                    <View className="flex-row items-center justify-between " style={styles.view3}>
                        <TouchableOpacity 
                        onPress={() => handlePress('minus')}
                        onPressIn={() =>handlePressIn('minus')}
                        onPressOut={() => {
                            intervalRef.current &&
                            clearInterval(intervalRef.current)
                            intervalRef.current = null
                        }}>
                            <View className=" justify-center items-center bg-zinc-700 rounded-lg" style={styles.button}>
                                <Text className="text-white font-semibold " style={styles.text3}>–</Text>
                            </View>
                        </TouchableOpacity>

                        <Text className="text-white" style={styles.text3}>{age}</Text>

                        <TouchableOpacity 
                        onPress={() => handlePress('plus')}
                        onPressIn={() =>handlePressIn('plus')}
                        onPressOut={() => {
                            intervalRef.current &&
                            clearInterval(intervalRef.current)
                            intervalRef.current = null
                        }}>
                            <View className=" justify-center items-center bg-zinc-700 rounded-lg" style={styles.button}>
                                <Text className="text-white font-semibold " style={styles.text3}>+</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <Text className="text-white font-semibold" style={styles.text4}>years</Text>
                </View>
                
                <MyButton text='continue' width={300} />
            </View>
        </View>
    )
}

const styles = ScaledSheet.create({

    text1:{
        paddingTop:'40@s',
        fontSize: '27@s',
    },
    text2: {
    
        paddingTop: '25@s',
        fontSize: '18@s',
    },
    text3:{
        fontSize: '35@s',
    },
    text4:{
        fontSize: '30@s',
        marginTop:'20@s'
    },
    scrollContainer: {
        marginTop: '50@vs',
        paddingBottom: '30@vs'
        
    },
    contentContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 8,
    },
    button:{
        width: '50@s',
        height: '50@s',

    },
    view:{
        paddingInline:'14@s',
    },
    view2:{
        paddingBottom: '40@s'
    },
    view3:{
        width:'200@s',
  }
})