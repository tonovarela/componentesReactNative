import React from 'react'
import { Alert, Button, Text, View, Platform } from 'react-native';
import prompt from 'react-native-prompt-android';


import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'



export const AlertScreen = () => {
    const showPrompAlternative = () => {
        prompt(
            'Enter password',
            'Enter your password to claim your $1.5B in lottery winnings',
            [
             {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
             {text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password)},
            ],
            {
                type: 'secure-text',
                cancelable: false,
                defaultValue: 'test',
                placeholder: 'placeholder'
            }
        );
    }
    const showAlert = () => {
        Alert.alert('Titulo', 'Cuerpo del alerta', [
            { text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: 'destructive' },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ], {
            cancelable: true, onDismiss: () => console.log('Alert Dismissed'),
        });
    }


    const showPrompt = () => {
        Alert.prompt(
            'Titulo','Cuerpo del alerta',            
            [
                { text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: 'destructive' },
                { text: 'OK', onPress: (text) => console.log( text) },
                
            ],  
                            
        );
    }

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title="Alerts" ></HeaderTitle>
            
            <Button title="Mostrar" onPress={() => showAlert()}></Button>
            <View style={{height:10}}></View>
            {Platform.OS === 'ios'&&<Button title="Mostrar Prompt solo IOS" onPress={() => showPrompt()}></Button>}
            <Button title="Mostrar Prompt Alternativo" onPress={() => showPrompAlternative()}></Button>
            

        </View>
    )
}
