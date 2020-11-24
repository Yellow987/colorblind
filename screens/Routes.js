import Home from './Home/index.js';
import Game from "./Game";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const StackNavigator = createStackNavigator(
    {
      Home: {
        screen: Home
      },
      Game: {
        screen: Game
      }
    },
    {
        initialRouteName: "Home",
        headerMode: "none",
    }
    );

export default createAppContainer(StackNavigator);