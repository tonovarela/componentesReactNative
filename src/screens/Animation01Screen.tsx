import React from 'react'
import { Animated, Button, StyleSheet, TouchableOpacity, View } from 'react-native'
import { useFade } from '../hooks/useFade'


export const Animation01Screen = () => {
    const { fadeIn, opacity, fadeOut,startMoving,position } = useFade();

console.log(position);
    const handledFadeOut = () => {
        fadeIn(()=>{ startMoving({initPosition:0,toValue:-200},1000,true,fadeOut) }
        
        )};
    const handledFadeIn = () => fadeIn(()=> {  startMoving({initPosition:-200,toValue:0},1000,true)});


    return (
        <View style={styles.container}>
            <Animated.View style={{ ...styles.purpleBox, opacity,transform:[{translateX:position}] }}>
            </Animated.View>
            <Button title='FadeIn' onPress={handledFadeIn}></Button>
            <Button title='FadeOut' onPress={handledFadeOut}></Button>


        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    purpleBox: {
        backgroundColor: '#5856D6',
        width: 150,
        
        height: 150,
    }
});