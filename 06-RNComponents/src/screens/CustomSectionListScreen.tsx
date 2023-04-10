import React from 'react'
import { SectionList, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { ItemSeparator } from '../components/ItemSeparator';
import { styles } from '../theme/appTheme'

interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
    {
      casa: "DC Comics",
      data: ["Batman", "Superman", "Robin", "Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin",]
    },
    {
      casa: "Marvel Comics",
      data: ["Antman", "Thor", "Spiderman","Antman","Batman", "Superman", "Robin","Batman", "Superman", "Robin", ]
    },
    {
      casa: "Anime",
      data: ["Kenshin", "Goku", "Saitama","Batman", "Superman", "Robin","Batman", "Superman", "Robin", ]
    }
];

export const CustomSectionListScreen = () => {
  return (
    <View style={{ ...styles.globalMargin, flex: 1,backgroundColor: '#fff' }}>
      <SectionList 
        sections={ casas }
        keyExtractor={ (item, index) => item + index}

        ListHeaderComponent={ () => <HeaderTitle title="Custom Section List" />}
        ListFooterComponent={ () => (
          <View style={{ marginBottom: 70 }}>
            <HeaderTitle title={"Total de casas: " + casas.length} />
          </View>
        )}

        renderItem={ ({ item }) => <Text style={{}}>{ item }</Text>}
        stickySectionHeadersEnabled /* Android */

        renderSectionHeader={ ({ section }) => (
          <View style={{ backgroundColor: '#fff' }}>
            <HeaderTitle title={ section.casa } /> 
          </View>
        )}     
        renderSectionFooter={ ({ section }) => (
            <HeaderTitle title={ 'Total: ' + section.data.length } /> 
        ) }

        // SectionSeparatorComponent={ () => <ItemSeparator />}
        ItemSeparatorComponent={ () => <ItemSeparator />}
        
        showsVerticalScrollIndicator={ false }
        />
    </View>
  )
}
