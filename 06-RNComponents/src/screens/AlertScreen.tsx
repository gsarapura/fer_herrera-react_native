import React from 'react'
import { Alert, Button, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'

export const AlertScreen = () => {
  const showAlert = () => {
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'destructive',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ],
    {
      // Android
      cancelable: true,
      onDismiss: () => console.log('On dismiss')
    });
  };
  
  const showPrompt = () => {
    Alert.prompt(
      'R u sure?',
    )

  };

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title='Alert' />
      <Button 
        title="Mostrar alerta"
        onPress={ showAlert }
      />

      <Button 
        title="Mostrar prompt"
        onPress={ showPrompt }
      />
    </View>
  )
}
