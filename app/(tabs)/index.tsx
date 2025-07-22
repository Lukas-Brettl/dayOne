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
      //SaveToStorage({items:{'Tu':{'Run': {'time':'30min', 'XP':30}}}, keyName:'schedule'})
      const user = await Load("user")
      const schedule = await Load('schedule')
      console.log(schedule)
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
        <Counter day={userData['day']} goal={userData['goal']}/>
      </View>
      }
      
      {scheduleData && <ToDo data={scheduleData}/>}
  
    </View>
  );
}
const styles = ScaledSheet.create({
    mainView:{
        paddingTop:'50@vs',
        paddingInline: '20@s'
    },})
