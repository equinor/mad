/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import DiscoverScreen from '../screens/DiscoverScreen';
import IconsScreen from '../screens/IconsScreen';
import { RootStackParamList, RootTabParamList,  } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { DrawScreen } from '../screens/DrawScreen';
import {SignatureScreen} from "../screens/SignatureTest";

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Discover"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        headerTitleAllowFontScaling: true,
      }}>
      <BottomTab.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="briefcase" color={color} />
        }}
      />
      <BottomTab.Screen
        name="Icons"
        component={IconsScreen}
        options={{
          title: 'Icons',
          tabBarIcon: ({ color }) => <TabBarIcon name="th" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Draw"
        component={DrawScreen}
        options={{
          title: 'Draw',
          tabBarIcon: ({ color }) => <TabBarIcon name="pencil-square-o" color={color} />,
        }}
      />
        <BottomTab.Screen
            name="Sign"
            component={SignatureScreen}
            options={{
                title: 'Sign',
                tabBarIcon: ({ color }) => <TabBarIcon name="pencil-square-o" color={color} />,
            }}
        />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
