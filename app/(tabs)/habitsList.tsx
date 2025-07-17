import { Text, View } from "react-native";
import Load from "../components/loadFromStorage";
import { useEffect, useState } from "react";

export default function HabitsList() {

  const [data, setData] = useState<any>()

  //load data from async storage with loadFromStorage component
  useEffect(() => {
    const fetchData = async () => {
      const habits = await Load("habits");
      setData(habits);
    };
    fetchData();
  }, []);

  function dataProcess(){
    for (const [key, value] of Object.entries(data)) {
    console.log(`${key}: ${value}`);
  }
  }
    
  return (
    <View className="bg-[#1A1A1A]"
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {
        
      
      }
      <Text className=" text-red-500">{data? data['Energy']['running']['XP']: "loading"}</Text>
    </View>
  );
}
