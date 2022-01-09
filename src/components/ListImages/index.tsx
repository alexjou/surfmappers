import styles from './styles';
import React, { useState } from 'react';
import { imagesGalery } from '../../api/data';
import { FlatList, Image, Modal, Text, TouchableOpacity, View } from "react-native";
import I18n from '../../locales';

export default function ListImages() {
  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState();
  const columns = 3;

  return (
    <View style={styles.container}>
      <Text style={styles.textDate}>6h - 7h</Text>

      <FlatList
        data={createRows(imagesGalery, columns)}
        keyExtractor={item => String(item.id)}
        numColumns={columns}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.item}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(!modalVisible);
                  setImage(item.image)
                }}>
                <Image
                  key={index}
                  style={styles.photo}
                  resizeMode='cover'
                  source={item.image}
                />
              </TouchableOpacity>
            </View>
          );
        }}
      />

      <Text style={styles.textDate}>9h - 12h</Text>

      <FlatList
        data={createRows(imagesGalery, columns)}
        keyExtractor={item => String(item.id)}
        numColumns={columns}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.item}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(!modalVisible);
                  setImage(item.image)
                }}>
                <Image
                  key={index}
                  style={styles.photo}
                  resizeMode='cover'
                  source={item.image}
                />
              </TouchableOpacity>
            </View>
          );
        }}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image
              style={styles.imageModal}
              resizeMode='cover'
              source={image} />

            <Text style={styles.price}>{I18n.t('price')}</Text>

            <TouchableOpacity
              style={styles.buttonClose}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>x</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.addCart} onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.textCart}>{I18n.t('addCart')}</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>


  );
};

function createRows(data: { id: string; name: string; empty: boolean }[], columns: number) {
  const rows = Math.floor(data.length / columns);
  let lastRowElements = data.length - rows * columns;
  if (lastRowElements) {

    while (lastRowElements !== columns) {
      data.push({
        id: `empty-${lastRowElements}`,
        name: `empty-${lastRowElements}`,
        empty: true
      });
      lastRowElements += 1;
    }
  }

  return data;
}