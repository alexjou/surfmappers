import styles from './styles';
import gif from '../../../assets/images/surf/gif.gif';
import { RootStackScreenProps } from '../../../types';
import { Text, View, TouchableOpacity, Image } from 'react-native';

export default function Development({ navigation }: RootStackScreenProps<'Development'>) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.gif}
        resizeMode='contain'
        source={gif}
      />

      <Text style={styles.title}>Tela em desenvolvimento!</Text>

      <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.link}>
        <Text style={styles.linkText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}