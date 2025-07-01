import { Tabs } from "expo-router";

export default function Layout() {
  return(
    <Tabs>
        <Tabs.Screen
            name='index'
            options={{
                title: 'Home',
                headerShown: false
        }}/>

        <Tabs.Screen
            name='profile'
            options={{
                title: 'Profile',
                headerShown: false
        }}/>
        
        <Tabs.Screen
            name='selection'
            options={{
                title: 'select',
                headerShown: false
        }}/>
    </Tabs>
  );
}
