import React from 'react'
import { FlatList, View } from 'react-native'
import { FlatListItemMenu } from '../components/FlatListItemMenu';
import { HeaderTitle } from '../components/HeaderTitle';
import { menuItems } from '../data/menuItems';
import { styles } from '../theme/appTheme';


export const HomeScreen = () => {

  const renderItemSeparator = () => {
    return(
      <View style={{ 
        borderWidth: 1, 
        opacity: 0.5,
        marginVertical: 8,
      }} />
    )
  }

  return (
    <View style={{ flex: 1, ...styles.globalMargin }}>
      <FlatList
        data={ menuItems }
        renderItem={({ item }) => <FlatListItemMenu menuItem={ item }/>}
        keyExtractor={ (item) => item.name }
        ListHeaderComponent={ <HeaderTitle title="Opciones de menú"/> }
        ItemSeparatorComponent={ renderItemSeparator }
      />
    </View>
  )
}
