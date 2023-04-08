import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MenuItem } from '../interfaces/appInterfaces'
import Icon from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

interface Props {
  menuItem: MenuItem;
}

export const FlatListItemMenu = ({ menuItem }: Props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={ 0.6 }
      onPress={ () => navigation.navigate(menuItem.component as never)}
    >
      <View style={ styles.container }>
        <Icon 
          name={ menuItem.icon }
          color="purple"
          size={ 23 }
        />
        <Text style={ styles.itemText }>
          { menuItem.name } 
        </Text>

        <View style={{ flex: 1}} />
          <Icon 
            name="arrow-forward"
            color="purple"
            size={ 23 }
          />
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 5,
    fontSize: 20,
  },
})
