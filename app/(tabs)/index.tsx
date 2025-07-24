import { Text, View } from "react-native";
import { ScaledSheet } from 'react-native-size-matters';
import Load from "../components/storage/loadFromStorage";
import SaveToStorage from "../components/storage/saveToStorage";
import Level from "../components/forHome/level";
import Counter from "../components/forHome/dayCounter";
import ToDo from "../components/forHome/habitsToDo";
import { useEffect, useState } from "react";
export default function Index() {

  const [userData, setUserData] = useState()
  const [scheduleData, setScheduleData] = useState()

  useEffect(()=>{
    
    const fetchData = async () => {
      //SaveToStorage({items:{'Th':{'Run': {'time':'30min', 'XP':30}}}, keyName:'schedule'})
      const user = await Load("user")
      const schedule = await Load('schedule')
      
      //SaveToStorage({items:{'lvl':1, 'streak':1, 'lvlXP': [60, 120], 'goal':60, 'firstLaunch':d}, keyName:'user'})

      !schedule && SaveToStorage({items:{'We':{'Run': {'time':'30min', 'XP':30}}}, keyName:'schedule'})

      
      console.log(user)
      setUserData(user)
      setScheduleData(schedule)
    }
    fetchData()

  },[])
  
  return (
    <View className="w-full h-full  bg-[#1A1A1A]" style={styles.mainView}>
      {userData &&
      <View>
        <Level lvl={userData['lvl']} streak={userData['streak']} lvlXP={userData['lvlXP']} />
        <Counter firstLaunch={userData['firstLaunch']} goal={userData['goal']}/>
      </View>
      }
      
      {scheduleData && <ToDo data={scheduleData}/>}
  
    </View>
  );
}
const styles = ScaledSheet.create({
    mainView:{
        paddingTop:'50@s',
        paddingInline: '20@s'
    },})
