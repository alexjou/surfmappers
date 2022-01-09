import styles from './styles';
import React, { useState } from 'react';
import Colors from '../../constants/Colors';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { View, TouchableOpacity, Image, Text, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function Feed({ item }) {

  const [indexSelected, setIndexSelected] = useState(0);
  const onSelect = (indexSelected: React.SetStateAction<number>) => {
    setIndexSelected(indexSelected);
  };
  return (
    <View style={styles.viewCarousel}>
      <View>
        <Carousel
          layout='default'
          data={item.feedImages}
          sliderWidth={width}
          itemWidth={width}
          renderItem={({ item, index }) => (
            <Image
              key={index}
              style={styles.imageItem}
              resizeMode='contain'
              source={item.image}
            />
          )}
          onSnapToItem={index => onSelect(index)}
        />

        <View style={styles.viewButtons}>
          <View style={styles.viewInsideButtons}>
            <TouchableOpacity style={styles.buttonIcon}>
              <AntDesign
                name="hearto"
                size={20}
                color={Colors.theme.black}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Entypo
                name="share"
                size={20}
                color={Colors.theme.black}
                style={styles.buttonShare}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.viewPagination}>
            <Pagination
              inactiveDotColor='gray'
              dotColor={Colors.theme.default}
              dotStyle={styles.pagination}
              activeDotIndex={indexSelected}
              dotsLength={item.feedImages.length}
              animatedDuration={1}
            />
          </View>

          <View style={styles.viewPagination}>
            <TouchableOpacity style={styles.buttonCamera}>
              <Feather
                name="camera"
                size={20}
                color={Colors.theme.black}
                style={styles.iconCamera}
              />

              <Text style={styles.textUser}>{item.user}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};