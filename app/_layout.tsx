import { Stack } from "expo-router"

import "./global.css"
import { screenOptionsFactory } from "expo-router/build/useScreens";

export default function RootLayout() {
   
  return(
  <Stack>
    <Stack.Screen name="(tabs)" options={{
      headerShown: false,
      contentStyle:{backgroundColor:'black'}
      
    }
    
    }/>
  </Stack>
  );
}
