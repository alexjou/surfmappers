import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import I18n from '../locales';
import Home from '../screens/Home';
import Album from '../screens/Album';
import Colors from '../constants/Colors';
import Development from '../screens/Development';
import { FontAwesome5 } from '@expo/vector-icons';
import useColorScheme from '../hooks/useColorScheme';
import LinkingConfiguration from './LinkingConfiguration';
import { RootStackParamList, RootTabParamList } from '../../types';

export default function Navigation() {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Album" component={Album} options={{ headerShown: false }} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarStyle: {
          height: 70,
        }
      }}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Feed',
          headerShown: false,
          tabBarIcon: ({ color, size }) => <Ionicons name="home" size={30} color={color} />,
          tabBarLabelStyle: { marginBottom: 5, fontSize: 12 }
        }}
      />
      <BottomTab.Screen
        name="Explorar"
        component={Development}
        options={{
          title: `${I18n.t('explore')}`,
          headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons name="search" size={30} color={color} />,
          tabBarLabelStyle: {
            marginBottom: 5, fontSize: 12
          }
        }}
      />
      <BottomTab.Screen
        name="Checkin"
        component={Development}
        options={{
          title: 'Checkin',
          headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons name="location-outline" size={30} color={color} />,
          tabBarLabelStyle: {
            marginBottom: 5, fontSize: 12
          }
        }}
      />
      <BottomTab.Screen
        name="TabFour"
        component={Development}
        options={{
          title: `${I18n.t('notifications')}`,
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome5 name="bell" size={30} color={color} />,
          tabBarLabelStyle: {
            marginBottom: 5, fontSize: 12
          }
        }}
      />
      <BottomTab.Screen
        name="TabFive"
        component={Development}
        options={{
          title: `${I18n.t('profile')}`,
          headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons name="person-outline" size={30} color={color} />,
          tabBarLabelStyle: {
            marginBottom: 5, fontSize: 12
          }
        }}
      />
    </BottomTab.Navigator>
  );
}