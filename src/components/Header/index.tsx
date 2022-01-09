import React from 'react';
import styles from './styles';
import { Data } from './types';
import I18n from '../../locales';
import { FlatList, View, TouchableOpacity, Image, Text } from 'react-native';

export default function Header({ data }: Data) {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.storiesContainer}>
            <View style={styles.viewImage}>
              <Image style={styles.surfImage} resizeMode={'cover'} source={item.image} />
            </View>

            <Text style={styles.storiesUserName}>{item.name === 'add' ? I18n.t('add') : item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>


  );
};