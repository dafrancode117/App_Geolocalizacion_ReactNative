import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import { HomeComponent } from '../home/HomeComponent';
import { useColorScheme } from 'react-native';

const Drawer = createDrawerNavigator();

export const DrawerComponent = () => {
   const isDarkMode = useColorScheme() === 'dark';
   return (
      <Drawer.Navigator screenOptions={{headerTintColor:isDarkMode ? 'white' : 'black'}}>
         <Drawer.Screen name='Home' component={HomeComponent}/>
      </Drawer.Navigator>
   )
}
