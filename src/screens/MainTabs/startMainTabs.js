import { Navigation } from 'react-native-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const startTabs = () => {
    Navigation.setRoot({
        root: {
          bottomTabs: {
            children: [{
              stack: {
                children: [{
                  component: {
                    name: 'get-liquored.RecipeBookScreen',
                    passProps: {
                      text: 'Recipe Book'
                    }
                  }
                }],
                options: {
                  bottomTab: {
                    text: 'Recipe Book',
                    icon: () => {
                        <MaterialCommunityIcons 
                            name="book-outline" 
                            size={24} 
                            color="black"
                        />
                    },
                    testID: 'RECIPE_TAB_BAR_BUTTON'
                  }
                }
              }
            },
            {
                component: {
                    name: 'get-liquored.BarcodeReaderScreen',
                    passProps: {
                    text: 'Barcode Reader'
                    },
                    options: {
                        bottomTab: {
                        text: 'Barcode Reader',
                        icon: () => {
                            <MaterialCommunityIcons 
                                name="barcode-scan" 
                                size={24} 
                                color="black"
                            />
                        },
                        testID: 'BARCODE_TAB_BAR_BUTTON'
                        }
                    }
                }
            },
            {
                component: {
                    name: 'get-liquored.ShelfScreen',
                    passProps: {
                    text: 'Shelf'
                    },
                    options: {
                        bottomTab: {
                        text: 'Shelf',
                        icon: () => {
                            <MaterialCommunityIcons 
                                name="bottle-wine" 
                                size={24} 
                                color="black"
                            />
                        },
                        testID: 'SHELF_TAB_BAR_BUTTON'
                        }
                    }
                }
            }]
          }
        }
    });
}

export default startTabs;
