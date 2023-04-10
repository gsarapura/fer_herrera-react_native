import React, { useState } from 'react'
import { Button, Modal, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title='Modal' />
      <Button
        title='Abrir modal'
        onPress={ () => setIsVisible(true) }
      />

      <Modal
        animationType='fade'
        visible={ isVisible }
        transparent={ true }
      >
        {/* Background  */}
        <View style={{ 
          flex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          {/* Contenido */}
          <View style={{ 
            backgroundColor: 'white',
            width: 200,
            height: 200,
            justifyContent: 'center',
            alignItems: 'center',
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.25, //iOS
            elevation: 4, //Android
            borderRadius: 5,
          }}>
            <HeaderTitle title='Title' />
            <Text>Cuerpo del modal</Text>
            <Button
              title='Cerrar'
              onPress={ () => setIsVisible(false) }
            />
          </View>
        </View>
      </Modal>
    </View>
  )
}
