import { createStackNavigator } from '@react-navigation/stack';
import { AlertScreen, Animation01Screen, Animation02Screen, HomeScreen, SwitchScreen } from '../screens';


const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown:false
    }}
    >
    <Stack.Screen name="Home" component={HomeScreen} />    
    <Stack.Screen name="Animation01Screen" component={Animation01Screen} />    
    <Stack.Screen name="Animation02Screen" component={Animation02Screen} />    
    <Stack.Screen name="SwitchScreen" component={SwitchScreen} />    
    <Stack.Screen name="AlertScreen" component={AlertScreen} />    
  </Stack.Navigator>
  )
}
