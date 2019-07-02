import { createStackNavigator, createAppContainer } from 'react-navigation';
import React, { Component } from 'react';

//Views component
import Home from './views/Home';
import Add from './views/Add';

const AppNavigator = createStackNavigator(
  {
    Home:  Home,
    Add: Add,
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppNavigator);
class App extends Component {
  render(){
    return(
      <AppContainer />
    )
  }
}

export default App;

