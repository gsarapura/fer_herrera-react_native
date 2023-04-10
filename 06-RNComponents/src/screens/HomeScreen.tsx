import React from 'react'
import { FlatList, View } from 'react-native'
import { FlatListItemMenu } from '../components/FlatListItemMenu';
import { HeaderTitle } from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSeparator';
import { menuItems } from '../data/menuItems';
import { styles } from '../theme/appTheme';


export const HomeScreen = () => {

  return (
    <View style={{ flex: 1, ...styles.globalMargin }}>
      <FlatList
        data={ menuItems }
        renderItem={({ item }) => <FlatListItemMenu menuItem={ item }/>}
        keyExtractor={ (item) => item.name }
        ListHeaderComponent={ <HeaderTitle title="Opciones de menú"/> }
        ItemSeparatorComponent={ () => <ItemSeparator /> }
      />
    </View>
  )
}
