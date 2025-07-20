import { Tabs} from "expo-router";



export default function Layout() {
  return(
    
    <Tabs screenOptions={{
      tabBarStyle:{
        backgroundColor:'black',
        borderColor:'black'
      },
      
    }
    }>


        <Tabs.Screen
            name='index'
            options={{
                title: 'Home',
                headerShown: false
               
        }}/>


        
        <Tabs.Screen
            name='selection'
            options={{
                title: 'select',
                headerShown: false
        }}/> 
        <Tabs.Screen
            name='habitsList'
            options={{
                title: 'habits',
                headerShown: false
        }}/>
    </Tabs>
  );
}
