import { Text, View } from "react-native";
import Load from "../components/storage/loadFromStorage";
import SaveToStorage from "../components/storage/saveToStorage";
import Level from "../components/forHome/level";
import { useEffect, useState } from "react";
export default function Index() {

  const [data, setData] = useState()

  useEffect(()=>{
    
    const fetchData = async () => {
      //SaveToStorage({items:[40, 120], keyName:'user', where:['lvlXP']})
      const user = await Load("user")
      console.log(user)
      setData(user)
    }
    fetchData()

  },[])
  
  return (
    <View className="w-full h-full  bg-[#1A1A1A]">
      {data && <Level lvl={data['lvl']} streak={data['streak']} lvlXP={data['lvlXP']} />}
      
      <Text className=" text-blue-500">Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
