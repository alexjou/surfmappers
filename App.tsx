import { StatusBar } from 'react-native';
import Colors from './src/constants/Colors';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import './src/locales';
import Navigation from './src/navigation';
import useColorScheme from './src/hooks/useColorScheme';
import useCachedResources from './src/hooks/useCachedResources';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <StatusBar barStyle="light-content" backgroundColor={Colors.theme.default} />
        <Navigation colorScheme={colorScheme} />
      </SafeAreaProvider>
    );
  }
}
