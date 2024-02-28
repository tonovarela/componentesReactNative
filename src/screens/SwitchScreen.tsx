import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle';
import { CustomSwitch } from '../components/CustomSwitch';


export const SwitchScreen = () => {
  const [state, setstate] = useState({isActive:true,isHungry:false,isHappy:true})
  const {isActive,isHungry,isHappy} = state;
const onChange = (value:boolean,field:string) => {
  setstate({...state, [field]:value})
}
  return (
    <View style={{marginHorizontal:20}}>
      <HeaderTitle title="Switches" />
      <View style={styles.switchRow} >
        <Text>isActive</Text>
        <CustomSwitch isOn={isActive} onChange={(value)=>{onChange(value,'isActive')}}></CustomSwitch>
      </View>
      <View style={styles.switchRow} >
        <Text>isActive</Text>
        <CustomSwitch isOn={isHungry} onChange={(value)=>{onChange(value,'isHungry')}}></CustomSwitch>
      </View>
      <View style={styles.switchRow} >
        <Text>isActive</Text>
        <CustomSwitch isOn={isHappy} onChange={(value)=>{onChange(value,'isHappy')}}></CustomSwitch>
      </View>
      

      <Text style={styles.switchText}> 
        {JSON.stringify(state,null,5)}
      </Text>
    </View>
  )
}


const styles= {
  switchText:{
    fontSize:25
  },
  switchRow:{    
     justifyContent:'space-between',
     alignItems:'center',
     marginVertical:5,
     flexDirection:'row',
    
    
    
  }
}