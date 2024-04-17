import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigation} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CommonActions} from '@react-navigation/native';
import Onboarding from '../../screens/Onboarding';
import Wallet from '../../screens/Wallet';
import History from '../../screens/history';
import Routes from '../Routes';
import CardExchange from '../../screens/CardExchange';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({navigation, state, descriptors, insets}) => (
        <BottomNavigation.Bar
          navigationState={state}
          safeAreaInsets={insets}
          onTabPress={({route, preventDefault}) => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
            } else {
              navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              });
            }
          }}
          renderIcon={({route, focused, color}) => {
            const {options} = descriptors[route.key];
            if (options.tabBarIcon) {
              return options.tabBarIcon({focused, color, size: 24});
            }

            return null;
          }}
          getLabelText={({route}) => {
            const {options} = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.title;

            return label;
          }}
        />
      )}>
      <Tab.Screen
        name={Routes.HOME}
        component={Onboarding}
        options={{
          tabBarLabel: 'Home',
          tabBarBackground: 'red',
          tabBarStyle: {backgroundColor: 'black'},
          tabBarIcon: ({color, size}) => {
            return <Icon name="home" size={size} color={color} />;
          },
        }}
      />

      <Tab.Screen
        name={Routes.WALLET}
        component={CardExchange}
        options={{
          tabBarLabel: 'Exchange',

          tabBarIcon: ({color, size}) => {
            return <Icon name="stack-exchange" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name={Routes.CARDEXCHANGE}
        component={Wallet}
        options={{
          tabBarLabel: 'wallet',
          tabBarIcon: ({color, size}) => {
            return <Icon name="wallet" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name={Routes.HISTORY}
        component={History}
        options={{
          tabBarLabel: 'history',
          tabBarLabel: 'history',

          tabBarIcon: ({color, size}) => {
            return <Icon name="history" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
