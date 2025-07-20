import { Text, View, FlatList, ScrollView } from "react-native";
import { ScaledSheet} from 'react-native-size-matters';
import Load from "../components/storage/loadFromStorage";
import Card from "../components/habitCard"
import { useEffect, useState } from "react";



type habitInfoType = {
    category:string
    XP: number,
    frequency: string[],
    lvl: number,
    lvlXP: number[],
    info: string[][]
}

type dataI = Record<string,Record<string,habitInfoType>>

export default function HabitsList() {

  const [data, setData] = useState<dataI>()
  const [numberOfHabits, setNumberOfHabits] = useState<number>(0)

  //load data from async storage with loadFromStorage component
  useEffect(() => {
    const fetchData = async () => {
      const habits = await Load("habits");
      setData(habits);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!data) return;

    let count = 0;
    for (const category of Object.values(data)) {
      count += Object.keys(category).length;
    }
    setNumberOfHabits(count);
  }, [data]);

  function dataProcess(){

    const content=[]
    let i =0
    if (!data) return []

    for (const [category, habitObject] of Object.entries(data)) {

      content.push(<Text className="text-white"  style={styles.text2} key={`${i}_${category}`}>{category} </Text>)
      
      for (const [habitName, habitInfo] of Object.entries(habitObject)) {

        content.push(<View className="w-full items-center"  key={`${i}_${habitName}`}><Card habitName={habitName} habitInfo={habitInfo}/></View>)
        
      }
      i++
    }
    return content
  }
    
  return (
    <View className="flex-1 bg-[#1A1A1A]">
      <View className=" items-center" style={styles.View1}>
        <Text className="text-white" style={styles.text1}>Habits ({numberOfHabits})</Text>
      </View>
    
      <ScrollView className="flex-1 w-full text-red-500" style={styles.contentView}>
      {
          data?dataProcess(): <Text className="text-white text-3xl">loading</Text>
      
      }
      </ScrollView>
    </View>
  );
}
const styles = ScaledSheet.create({

  text1:{
    fontSize: '29@s'
  },
  text2:{
    paddingLeft: '15@s',
    fontSize: '19@s',
  },
  View1:{
    paddingTop: '80@s'
  },
  contentView:{
    gap:'15@s'
  }
})

