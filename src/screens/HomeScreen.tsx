
import React from 'react'
import { View, FlatList, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { MenuItem } from '../interfaces/appInterfaces';

const menuItems:MenuItem[] = [{
    id:"1",
    name: "Animation 01",
    icon: 'cube-outline',
    component: 'Animation01Screen'
},
{
    id:"2",
    name: "Animation 02",
    icon: 'albums-outline',
    component: 'Animation02Screen'
}
];
export const HomeScreen = () => {
    const { top} =useSafeAreaInsets();
    const renderListHeader =()=>{
        return(
            <View style={{marginTop:top+20,marginBottom:20}}>
                <Text style={styles.title}>Opciones de Menú</Text>
            </View>
        )
    }
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
                ListHeaderComponent={renderListHeader}
                renderItem={ ({item}) => <FlatListMenuItem menuItem={item} />} 
                ItemSeparatorComponent={itemSeparator}
                keyExtractor={(item:MenuItem)=> item.id.toString()}

            />

        </View>


    )
}
