import styles from './styles';
import { LogBox } from 'react-native';
import I18n from '../../locales/index';
import Body from '../../components/Body';
import { useEffect, useState } from 'react';
import Colors from '../../constants/Colors';
import { dataStories } from '../../api/data';
import Header from '../../components/Header';
import { RootTabScreenProps } from '../../../types';
import { Picker } from '@react-native-picker/picker';
import { Text, View } from '../../components/Themed';
import { Entypo, Ionicons } from '@expo/vector-icons';
import logoSurf from '../../../assets/images/surfmapperslogo.png';
import { Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';

export default function Home({ navigation }: RootTabScreenProps<'Home'>) {
  const [surf, setSurf] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  function changeLanguage(locale) {
    setSelectedLanguage(locale);
    I18n.locale = locale;
    navigation.navigate('Home')
  }
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, [selectedLanguage])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={logoSurf} />

        <View style={styles.iconView}>
          <TouchableOpacity style={styles.buttonsIcons}>
            <Ionicons
              name="cart-outline"
              size={25}
              color={Colors.theme.red}
              style={styles.buttonIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Entypo
              name="chat"
              size={25}
              color={Colors.theme.gray}
              style={styles.buttonIcon}
            />
          </TouchableOpacity>

          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(value) => changeLanguage(value)}
            mode="dropdown"
            style={styles.picker}
          >
            <Picker.Item label={I18n.t('language')} value="" />
            <Picker.Item label={I18n.t('pt')} value="pt-BR" />
            <Picker.Item label={I18n.t('en')} value="en-US" />
          </Picker>
        </View>
      </View>

      <Header data={dataStories} />

      <ScrollView style={styles.feed}>
        <View style={styles.viewFeed}>
          <View style={styles.textView} >
            <Text style={styles.textFirstQuestion}>{I18n.t('first_text_question')}</Text>
            <Text style={styles.textSeccondQuestion}>{I18n.t('seccond_text_question')}</Text>
          </View>
          <View style={styles.inputView}>
            <Ionicons
              name="search"
              size={20}
              style={styles.iconInput}
              color={Colors.theme.gray}
            />
            <TextInput
              value={surf}
              returnKeyType="send"
              onChangeText={setSurf}
              style={styles.inputText}
              placeholder={I18n.t('question')}
              placeholderTextColor={Colors.theme.gray}
            />
          </View>
          <Body navigation={navigation} selectedLanguage={selectedLanguage} />
        </View>
      </ScrollView>
    </View>
  );
}
