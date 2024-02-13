import { useRef } from "react";
import { Animated, Easing } from "react-native";

export const useFade = () => {

    const opacity = useRef(new Animated.Value(1)).current;
    const position = useRef(new Animated.Value(0)).current;

    const startMoving = ({initPosition=-100,toValue=0},duration=800,bounce=false,cb?:Function) => {
        position.setValue(initPosition);
        Animated.timing(position,
            {
                toValue,
                duration,
                easing: bounce ?Easing.bounce:undefined,
                useNativeDriver: true,
            }).start(()=>cb && cb());
    }


    

    const fadeOut = (duration = 300,cb?:Function) => {
        Animated.timing(opacity, {
            toValue: 0,
            duration,
            useNativeDriver: true
        }).start(()=>cb && cb());


    }
    const fadeIn = (cb?: Function) => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true
        }).start(() => cb && cb())

    }


    return {
        fadeIn, fadeOut, opacity,  startMoving, position
    }


}