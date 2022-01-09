import styles from './styles';
import I18n from '../../locales';
import Carousel from './carousel';
import React, { useEffect } from 'react';
import { dataFeed } from '../../api/data';
import Colors from '../../constants/Colors';
import { RootTabScreenProps } from '../../../types';
import { SimpleLineIcons } from '@expo/vector-icons';
import { FlatList, View, TouchableOpacity, Text } from 'react-native';

export default function Body({ navigation, selectedLanguage }: RootTabScreenProps<'Home'>) {

  useEffect(() => { }, [selectedLanguage])

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={dataFeed}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Album', { item })}>
            <Text style={styles.textLocate}>
              {item.location + I18n.t(`${item.nation}`)}
            </Text>

            <View style={styles.viewDate}>
              <Text style={styles.textDate}>
                {I18n.t(`${item.day}`) + ', 15 ' + I18n.t(`${item.month}`) + item.year}
              </Text>

              <TouchableOpacity>
                <SimpleLineIcons
                  name="options-vertical"
                  size={15}
                  color={Colors.theme.black}
                  style={styles.iconOptions}
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <Carousel item={item} />

        </View>
      )}
    />
  );
};