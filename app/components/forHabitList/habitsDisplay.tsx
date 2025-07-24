import { Text, View } from "react-native"
import { ScaledSheet} from 'react-native-size-matters';
import { ScrollView } from "react-native"
import SimpleCard from "./simpleHabitCard";

interface props{
    displayModal: any,
    data:dataI
}
type habitInfoType = {
    category:string
    XP: number,
    frequency: string[],
    lvl: number,
    lvlXP: number[],
    info: string[][]
}

type dataI = Record<string,Record<string,habitInfoType>>
export default function DataProcess({displayModal, data}: props){


    const content=[]
    let i =0
    if (!data) return []

    //display categorys and scrollviews with habits
    for (const [category, habitObject] of Object.entries(data)) {

      content.push(<Text className="text-white"  style={styles.text2} key={`${i}_${category}`}>{category} </Text>)
      const row = []

      for (const [habitName, habitInfo] of Object.entries(habitObject)) {

        row.push(<SimpleCard habitName={habitName} habitMore={habitInfo} handler={displayModal} key={`${i}_Card`}/>)
        i++
      }
      content.push(
        <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        key={`${i}_ScrollView`}
        >
          <View className="flex-row" style={styles.View2}>{row}</View>
        </ScrollView>)
    }
    return content
  }
  
  const styles = ScaledSheet.create({
  
    text2:{
      
      fontSize: '20@s',
    },
    View2:{
      gap:'20@s',
      marginLeft:'20@s',
      paddingTop:'15@s',
      paddingBottom:'40@vs'
    }
  })
  
  