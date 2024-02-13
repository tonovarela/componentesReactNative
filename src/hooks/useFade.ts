import { useRef } from "react";
import { Animated,Easing } from "react-native";

export const useFade = () => {

    const opacity = useRef(new Animated.Value(1)).current;
    const top = useRef(new Animated.Value(-100)).current;

    const easing =()=>{
         Animated.timing(top,                      
         {   
            toValue: 0,
            duration: 800,
            easing: Easing.bounce,
            useNativeDriver: true,            
        }).start();
    }
    const fadeOut = (duration=300) => {
        Animated.timing(opacity, {
            toValue: 0,
            duration,
            useNativeDriver: true
        }).start()


    }
    const fadeIn = (cb?:Function) => {        
        Animated.timing(opacity, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true
        }).start(()=>cb && cb())

    }


    return {
        fadeIn, fadeOut,opacity,easing,top
    }


}