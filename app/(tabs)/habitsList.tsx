import { Text, View, ScrollView} from "react-native";
import { ScaledSheet} from 'react-native-size-matters';
import DataProcess from "../components/forHabitList/habitsDisplay";
import Load from "../components/storage/loadFromStorage";
import HabitMore from "../components/forHabitList/habitMore";
import { useEffect, useState } from "react";
import SaveToStorage from "../components/storage/saveToStorage";
import Schedule from "../components/storage/saveSchedule";

type habitInfoType = {
    category:string
    XP: number,
    frequency: string[],
    lvl: number,
    lvlXP: number[],
    time?:string,
    info?: string[][]
}

type modalType ={
  name: string,
  more:habitInfoType
}

type dataI = Record<string,Record<string,habitInfoType>>

export default function HabitsList() {
  const [visible, setVisible] = useState(false)

  const [data, setData] = useState<dataI>()
  const [numberOfHabits, setNumberOfHabits] = useState<number>(0)
  const [modalInfo, setModalInfo] = useState<modalType>()

  //load data from async storage with loadFromStorage component
  useEffect(() => {
    const fetchData = async () => {
      const habits = await Load("habits")
      setData(habits)
    }
    fetchData()
  }, [visible])

  //counts habits
  useEffect(() => {
    if (!data) return

    let count = 0
    for (const category of Object.values(data)) {
      count += Object.keys(category).length
    }
    setNumberOfHabits(count)
  }, [data])

  
  return (
    <View className="flex-1 bg-[#1A1A1A]">
      {modalInfo && <HabitMore visible={visible} handler={closeModal} name={modalInfo['name']} more={modalInfo['more']}/>}
      <View className=" items-center" style={styles.View1}>
        <Text className="text-white" style={styles.text1}>Habits ({numberOfHabits})</Text>
      </View>
    
      <ScrollView className="flex-1 w-full text-red-500" style={styles.contentView}>
      {
          data?<DataProcess displayModal={displayModal} data={data}/>: <Text className="text-white text-3xl">loading</Text>
      
      }
      </ScrollView>
    </View>
  )

  function displayModal(habitName:string, habitInfo:habitInfoType){
    setModalInfo({'name':habitName, 'more':habitInfo})
    setVisible(true)
  }

  async function closeModal(days:string[], category:string, name:string){
    setVisible(false)
    
    await SaveToStorage({
    items: days,
    where: [category, name, "frequency"],
    keyName: 'habits'
  })
  
    await Schedule(days, category, name)
  } 
}
const styles = ScaledSheet.create({

  text1:{
    fontSize: '35@s'
  },
  View1:{
    paddingTop: '80@s'
  },
  contentView:{
    
    paddingTop:'20@s',
    paddingLeft:'20@s'
  }
})

