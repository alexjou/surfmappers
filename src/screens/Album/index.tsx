import I18n from '../../locales';
import Colors from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { RootTabScreenProps } from '../../../types';
import { Text, View } from '../../components/Themed';
import ListImages from '../../components/ListImages';
import { ScrollView, TouchableOpacity } from 'react-native';
import { Entypo, Feather, FontAwesome, SimpleLineIcons } from '@expo/vector-icons';
import styles from './styles';

export default function Album({ navigation, route }: RootTabScreenProps<'Album'>) {
  const doc = route?.params?.item;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.buttonBack}
          onPress={() => navigation.goBack()}>
          <MaterialIcons
            name="arrow-back-ios"
            size={25}
            color={Colors.theme.black}
          />
          <Text style={styles.textNameScreen}>
            {I18n.t('album')}
          </Text>
        </TouchableOpacity>

        <View style={styles.iconView}>
          <TouchableOpacity style={styles.buttonSeparate}>
            <Ionicons
              name="cart-outline"
              size={25}
              color={Colors.theme.red}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonSeparate}>
            <Ionicons
              name="chatbox-outline"
              size={25}
              color={Colors.theme.gray}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <SimpleLineIcons
              name="options-vertical"
              size={20}
              color={Colors.theme.black}
            />
          </TouchableOpacity>

        </View>
      </View>

      <View style={styles.containerGalery}>
        <View style={styles.containerTitle}>
          <View style={styles.viewTexts}>
            <Text numberOfLines={1} style={styles.textView}>
              {doc.location + I18n.t(`${doc.nation}`)}
            </Text>

            <Text style={styles.textMenu}>
              {I18n.t(`${doc.day}`) + ', 15 ' + I18n.t(`${doc.month}`) + doc.year}
            </Text>
          </View>
          <View style={styles.menu}>
            <TouchableOpacity style={styles.buttonShare}>
              <Entypo
                name="share"
                size={25}
                color={Colors.theme.gray}
              />
            </TouchableOpacity>

          </View>
        </View>
        <View style={styles.containerCamera}>
          <TouchableOpacity style={styles.buttonCamera}>
            <Feather
              name="camera"
              size={20}
              color={Colors.theme.gray}
              style={styles.iconCamera}
            />
            <Text style={styles.nameUser}>
              {doc.name}
            </Text>
          </TouchableOpacity>
          <View style={styles.viewChat}>
            <TouchableOpacity style={styles.buttonChat}>
              <Entypo
                name="chat"
                size={20}
                color={Colors.theme.gray}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonFollowing}>
              <Text style={styles.textFollowing}>
                {I18n.t('following')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.viewOptions}>
          <View style={styles.viewNumberPhotos}>
            <Text style={styles.textNumberPhoto}>
              260 {I18n.t('photos')}
            </Text>
          </View>
          <View>

            <TouchableOpacity style={styles.buttonFilter}>
              <FontAwesome
                name="filter"
                size={15}
                color={Colors.theme.white}
                style={styles.iconFilter}
              />
              <Text style={styles.textFilter}>
                {I18n.t('filter')}
              </Text>
              <MaterialIcons
                name="arrow-drop-down"
                size={20}
                color={Colors.theme.default}
                style={styles.iconOption}
              />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView style={styles.feed}>
          <View style={styles.listImages}>
            <ListImages />
          </View>
        </ScrollView>
      </View >
    </View>
  );
}
