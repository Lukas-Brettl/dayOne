import { SafeAreaView, TouchableOpacity, View, Text, ScrollView, TouchableWithoutFeedback } from "react-native";
import { ScaledSheet,scale  } from 'react-native-size-matters';
import { Animated } from 'react-native';
import MyButton from "../components/button";
import { useState, useRef } from "react";

interface Props {
  text: string,
}

export default function SelectHabits({ text }: Props) {

    const[selected, setSelected] = useState<string[]>([])
    const[expand, setExpand] = useState<boolean>(false)

    const animatedHeight = useRef(new Animated.Value(scale(250))).current

    function addOrRemoveSelected(val:string):void{
        
        if (selected.includes(val)) {
            setSelected(prev => prev.filter(item => item !== val));
        } else {
            setSelected(prev => [val, ...prev.slice(0, 2)]);
        }        
    }

    function toggleExpand() {
        setExpand(!expand)
        Animated.timing(animatedHeight, {
            toValue: expand ? scale(250) : scale(380), 
            duration: 300, 
            useNativeDriver: false, 
        }).start();
        }


  const habits = [
    'running', 'exersise', 'quality sleep', 'screen time', 'reading books',
    'cold showers', 'drinking water', "learning", 'custom hobby',
    'meditation', 'journaling', 'cleaning room', 'walking', 'edu'
  ];

  return (
    <View className="w-full items-center flex-1">
        <Text className="text-white font-semibold" style={styles.text1}>{text}</Text>

      
            <Animated.View
            className="items-center border-b-2 border-b-zinc-400"
            style={{
                width: '100%',
                height: animatedHeight,
            }}>

            <View>
                <ScrollView className="flex-1" style={styles.scrollContainer} contentContainerStyle={styles.contentContainer}>
                    
                    {habits.map((item, index) => {
                        const isSelected = selected.includes(item);
                        const buttonStyle = {
                            backgroundColor: isSelected ? 'white' : 'transparent',
                            width: scale(150),
                            height: scale(40),
                        };
                        const textStyle = {
                            color: isSelected ? 'black' : '#a1a1aa',
                            fontSize: scale(14),
                        };

                        return (
                            <TouchableOpacity
                                key={index}
                                onPress={() => addOrRemoveSelected(item)}
                                className="z-10 justify-end rounded-xl border-b-4 border-r-4 border-zinc-700">
                            <View className="justify-center p-2 border-2 border-neutral-400 rounded-lg" style={buttonStyle}>
                                <Text className="font-medium" style={textStyle}>
                                {item}
                                </Text>
                            </View>
                            </TouchableOpacity>
                        );
                    })}

                </ScrollView>
                
            </View>
            <TouchableWithoutFeedback onPress={toggleExpand}>
                <View className="bg-white justify-center items-center border border-neutral-400  rounded-full z-10" style={styles.expandButton}>
                    <Text className="rounded-full  text-black text-2xl">{expand?'↑':'↓'}</Text>   
                </View>
            </TouchableWithoutFeedback>
        </Animated.View>
        <View className="flex-1 justify-end items-center" style={styles.lastView}>
            <Text className="text-white pb-6" style={styles.text3}>selected {selected.length}/3</Text>
            <MyButton text="submit" width={270} disabled={selected.length <3} />
        </View>                

    </View>
  );
}

const styles = ScaledSheet.create({

  text1:{
    paddingTop:'40@vs',
    width:'90%',
    fontSize: '27@s',
  },
  text2: {
    fontSize: '14@s',
  },
  text3:{
    fontSize: '17@s',
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
  expandButton:{
    width: '35@s',
    height: '35@s',
    marginTop: '-15@s'
  },
  lastView:{
    marginTop:'30@s',
    marginBottom:'40@s'
  }
})
