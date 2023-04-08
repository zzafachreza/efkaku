import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  HalamanTier,
  HalamanGlobal,
  HalamanAbout,
} from '../pages';
import { colors } from '../utils';
import { Icon } from 'react-native-elements';

const Stack = createStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name="HalamanTier"
        component={HalamanTier}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="HalamanGlobal"
        component={HalamanGlobal}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="HalamanAbout"
        component={HalamanAbout}
        options={{
          headerShown: false,
        }}
      />




    </Stack.Navigator>
  );
}
