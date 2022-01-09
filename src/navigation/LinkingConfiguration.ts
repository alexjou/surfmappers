import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              Home: 'one',
            },
          },
          TabTwo: {
            screens: {
              Album: 'two',
            },
          },
        },
      },
      Modal: 'modal',
    },
  },
};

export default linking;
