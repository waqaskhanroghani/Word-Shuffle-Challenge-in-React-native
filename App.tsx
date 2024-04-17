import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {PaperProvider} from 'react-native-paper';
import CardExchange from './src/screens/CardExchange';
import Onboarding from './src/screens/Onboarding';
import Wallet from './src/screens/Wallet';
import TabNavigation from './src/navigation/TabNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Routes from './src/navigation/Routes';
import {ExpenseProvider} from './src/context/ExpenseContext';
import Home from './src/screens/home';
import Guess from './src/screens/guess';
const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <PaperProvider>
          <ExpenseProvider>
            <Stack.Navigator initialRouteName={Routes.HOME}>
              <Stack.Screen
                name={Routes.HOME}
                component={Home}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name={Routes.GUESS}
                component={Guess}
                options={{
                  headerShown: false,
                }}
              />
            </Stack.Navigator>
          </ExpenseProvider>
        </PaperProvider>
      </NavigationContainer>
    </SafeAreaView>
  );
}
