import React, { useEffect, useRef, useState } from 'react'
import { Pressable, Text, TouchableWithoutFeedback, Animated } from 'react-native'
import { scale } from 'react-native-size-matters'
import * as Haptics from 'expo-haptics';
import { View } from 'react-native-animatable';



interface Props {
    text: string,
    speed?: number,
    delayAfterEnd?: number,
    onTypingEnd?: () => void,
    endDisplay?: boolean
}

const TypingText = ({ text, speed = 50,  delayAfterEnd = 500, onTypingEnd, endDisplay=false }: Props) => {
    const [displayedText, setDisplayedText] = useState('')
    const [isTypingDone, setIsTypingDone] = useState(false)
    const [cursorVisible, setCursorVisible] = useState(true)
    const [endTyping, setEndTyping] = useState<boolean>(false)

    const fadeAnim = useRef(new Animated.Value(0)).current
   

useEffect(() => {
  setDisplayedText('')
  let i = 0

  const interval = setInterval(() => {
    setDisplayedText(e => {
      if (i < text.length) {
        const updated = e + text[i]
        i++
        
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Rigid)
        return updated
      } else {
        clearInterval(interval)

        setIsTypingDone(true)
        setTimeout(() => {
          onTypingEnd?.()
        }, delayAfterEnd)

        if(endDisplay){
          setEndTyping(true)
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 600,
            useNativeDriver: true,
          }).start()
        }

        return e
      }
    })
  }, speed)

  return () => clearInterval(interval)
}, [text])


  useEffect(() => {
    if (!isTypingDone) return

    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [isTypingDone])

  return (
    <Pressable onPress={()=>{
      endDisplay && console.log('s')
      
    }}>
        <Animated.Text className='text-center bg-blue-300' style={{ 
            fontSize: scale(29), 
            fontWeight: 'bold',
            opacity: endTyping ? fadeAnim : 1,
            borderRadius: endTyping? 10: 0,
            width:  endTyping? scale(260): 'auto',
            padding: endTyping? scale(15): 0, 
            color: endTyping?'black': 'white', 
            backgroundColor: endTyping? 'white': 'transparent', }}>
        {displayedText}
        {endTyping? null: 
          <View className='self-end  justify-end w-2 h-12 translate-y-1'>
            <Text className='text-white font-bold' style={{fontSize: scale(29)}}>
                {isTypingDone ? (cursorVisible ? '|' : ' ') : '|'}
            </Text>
          </View>
        }
        </Animated.Text>
    </Pressable>
  );
};

export default TypingText;
