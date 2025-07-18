import { useState, useEffect } from 'react';
import TypeWriter from './typeWriter'
import MyButton from '../button'
import { View, Text } from 'react-native'
import { ScaledSheet, scale} from 'react-native-size-matters';

export default function Introdution1(){
    const [step, setStep] = useState<number>(0);

    return(
        <View className=' w-full h-full justify-center items-center p-10'>
            {step === 0 && (
                <TypeWriter
                text={"One day or day one?"}
                speed={110}
                delayAfterEnd={3000}
                onTypingEnd={() => setStep(1)}
                />
            )}
            {step ===1 && (
                <TypeWriter
                text={'You kept waiting and saying "tomorrow"'}
                speed={80}
                delayAfterEnd={2300}
                onTypingEnd={() => setStep(2)}
                />
            )}
            {step ===2 && (
                <TypeWriter
                text={"Now is the time to start"}
                speed={80}
                delayAfterEnd={2300}
                onTypingEnd={() => setStep(3)}
                />
            )}
            {step ===3 && (
                <TypeWriter
                text={"This app will help you build good habits"}
                speed={80}
                delayAfterEnd={2300}
                onTypingEnd={() => setStep(4)}
                />
            )}
            {step ===4 && (
                <TypeWriter
                text={"Let's begin"}
                speed={80}
                delayAfterEnd={2300}
                endDisplay={true}
                />
                
            )}


            
        </View>
    )
}

