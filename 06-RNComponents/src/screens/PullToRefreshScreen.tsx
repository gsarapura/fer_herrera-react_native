import React, { useState } from 'react'
import { ScrollView, RefreshControl, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'

export const PullToRefreshScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>()
  const {top} = useSafeAreaInsets();
  

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      console.log('Done');
      setRefreshing(false);
      setData('Hola, Miguel');
    }, 3500)

  };

  return (
    <ScrollView
      style={{
        marginTop: refreshing ? top : 0,
      }}
      refreshControl={
        <RefreshControl 
          refreshing={ refreshing }
          onRefresh={ onRefresh }
          // Android
          progressViewOffset={ 10 }           
          progressBackgroundColor="red"
          colors= {['white', 'orange' ]}
          // iOS
          tintColor="orange"
          title='Refreshing...'
          titleColor='black'
        />
      }

    >
      <View style={styles.globalMargin}>
        <HeaderTitle title="Pull to Refresh"/>

        {
          data && <HeaderTitle title={ data }/>
        }
              </View>
    </ScrollView>
  )
}
