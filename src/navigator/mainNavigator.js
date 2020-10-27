import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList162987Navigator from '../features/ArticleList162987/navigator';
import ArticleList162986Navigator from '../features/ArticleList162986/navigator';
import ArticleList162985Navigator from '../features/ArticleList162985/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList162987: { screen: ArticleList162987Navigator },
ArticleList162986: { screen: ArticleList162986Navigator },
ArticleList162985: { screen: ArticleList162985Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
