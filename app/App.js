import { createStackNavigator, createAppContainer } from 'react-navigation';
import React, { Component } from 'react';

//Views component
import Home from './views/Home';
import Add from './views/Add';
import ArticleDetail from './views/ArticleDetail'
import firebase from 'react-native-firebase';
import { 
  checkPermission, 
  createNotificationListeners, 
  notificationListener, 
  notificationOpenedListener
} from './modules/firebase'


const AppNavigator = createStackNavigator(
  {
    Home:  Home,
    Add: Add,
    Detail : ArticleDetail,
  },
  {
    initialRouteName: "Home"
  }
);



const AppContainer = createAppContainer(AppNavigator);
class App extends Component {

  async componentDidMount() {
    //console.log("componentDidMount")
    checkPermission
    this.createNotificationListeners(); 
  }
  

  componentWillUnmount() {
    //console.log("componentWillUnmount")
    this.notificationListener();
    this.notificationOpenedListener();
  }

  async createNotificationListeners() {
    this.notificationListener = firebase.notifications().onNotification((notification) => {
        const { title, body } = notification;
        this.showAlert(title, body);
    });
  
    this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
        const { title, body } = notificationOpen.notification;
        this.showAlert(title, body);
    });
  
    this.notificationOpen = await firebase.notifications().getInitialNotification();

    if (notificationOpen) {
        const { title, body } = notificationOpen.notification;
        this.showAlert(title, body);
    }

    this.messageListener = firebase.messaging().onMessage((message) => {
      console.log(JSON.stringify(message));
    });
}
  
showAlert(title, body) {
  alert(
      title, body,
      [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false },
  );
}
  
  render(){
    return(
      <AppContainer />
    )
  }
}

export default App;

