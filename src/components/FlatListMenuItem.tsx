import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MenuItem } from '../interfaces/appInterfaces'
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
Icon

interface Props {
    menuItem: MenuItem
}

export const FlatListMenuItem = ({ menuItem }: Props) => {

    const navigation =useNavigation();
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={()=>{
            navigation.navigate(menuItem.component as never)
        }}>
            <View style={styles.container}>
                <Icon name={menuItem.icon} size={18} color="#5856D6" />
                <Text style={styles.itemText} >{menuItem.name} </Text>
                <View style={{ flex: 1 }}></View>
                <Icon name='chevron-forward-outline' size={18} color="gray" />
            </View>
        </TouchableOpacity>

    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',

    },
    itemText: {
        marginLeft: 10,
        fontSize: 18
    }
});
