import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BarcodeReaderScreen from '../screens/Main/BarcodeReaderScreen';
import ShelfScreen from '../screens/Main/ShelfScreen';
import RecipeBookScreen from '../screens/Main/RecipeBookScreen';
  
  const MainNavigator = createBottomTabNavigator(
    {
      RecipeBook: RecipeBookScreen,
      BarcodeReader: BarcodeReaderScreen,
      Shelf: ShelfScreen,  
    },
    {
      initialRouteName: 'BarcodeReader',
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'RecipeBook') {
            iconName = `book-outline`;
          } else if (routeName === 'BarcodeReader') {
            iconName = `barcode`;
          } else if (routeName === 'Shelf') {
            iconName = `bottle-wine`;
          }
  
          return <MaterialCommunityIcons name={iconName} size={30} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
      },
    }
  );

  export default MainNavigator;