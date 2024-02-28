
import React from 'react'
import { View, FlatList, Text } from 'react-native'
import { styles } from '../theme/appTheme';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { MenuItem } from '../interfaces/appInterfaces';
import { menuItems } from '../data';
import { HeaderTitle } from '../components/HeaderTitle';

export const HomeScreen = () => {   
    const itemSeparator = () => {
        return (
            <View style ={{borderBottomWidth:1,opacity:0.4,marginVertical:8}}> 
            </View>
        )
    }
    return (
        <View style={{ flex: 1,...styles.globalMargin}}>            
            <FlatList
                data={menuItems}
                ListHeaderComponent={()=> <HeaderTitle title="Opciones de menú" />}
                renderItem={ ({item}) => <FlatListMenuItem menuItem={item} />} 
                ItemSeparatorComponent={itemSeparator}
                keyExtractor={(item:MenuItem)=> item.id.toString()}
            />
        </View>
    )
}
