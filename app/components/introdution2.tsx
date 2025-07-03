import { View,Text } from "react-native";
import TypeWriter from '../components/typeWriter'
import { useState, useEffect, ReactNode } from 'react';
import Squares from "./squares";
import * as Animatable from 'react-native-animatable'
import {scale} from 'react-native-size-matters';

export default function Introdution2(){
    const [step, setStep] = useState<number>(0);
    const [secondStep, setSecondStep] = useState<number>(0)


    return(
        <View className="p-10">
             {step === 0 && (
                <TypeWriter
                text={"I'll show you something"}
                speed={110}
                delayAfterEnd={3000}
                onTypingEnd={() => setStep(1)}
                />
            )}
            {step === 1 && (
                <View className="flex-1 justify-evenly items-center">
                    <View className="w-full" style={{height: scale(100)}}>
                        {secondStep === 0 && (
                            <TypeWriter
                            text={"This is your life in squares"}
                            speed={110}
                            delayAfterEnd={3000}
                            onTypingEnd={() => setSecondStep(1)}
                            />
                        )}
                        {secondStep === 1 && (
                            <TypeWriter
                            text={"Each square represent 1 month"}
                            speed={110}
                            delayAfterEnd={3000}
                            onTypingEnd={() => setSecondStep(2)}
                            />
                        )}

                        {secondStep === 2 && (
                            <TypeWriter
                            text={"The white ones is time what you lived "}
                            speed={110}
                            delayAfterEnd={3000}
                            onTypingEnd={() => setSecondStep(2)}
                            />
                        )}


                    </View>

                    <Animatable.View animation="fadeInUp" duration={800} ><Squares/></Animatable.View>
                </View>
        )}
        </View>
    )
}