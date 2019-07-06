import { createStackNavigator, createAppContainer } from 'react-navigation';
import React, { Component } from 'react';

//Views component
import Home from './views/Home';
import Add from './views/Add';
import ArticleDetail from './views/ArticleDetail'
import firebase from 'react-native-firebase';


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
    console.log("componentDidMount")
    this.checkPermission();
    this.createNotificationListeners(); //add this line
  }
  
  ////////////////////// Add these methods //////////////////////
    
    //Remove listeners allocated in createNotificationListeners()
  componentWillUnmount() {
    console.log("componentWillUnmount")
    this.notificationListener();
    this.notificationOpenedListener();
  }
  
  async createNotificationListeners() {
    /*
    * Triggered when a particular notification has been received in foreground
    * */
    this.notificationListener = firebase.notifications().onNotification((notification) => {
        const { title, body } = notification;
        this.showAlert(title, body);
    });
  
    /*
    * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
    * */
    this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
        const { title, body } = notificationOpen.notification;
        this.showAlert(title, body);
    });
  
    /*
    * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
    * */
    const notificationOpen = await firebase.notifications().getInitialNotification();
    if (notificationOpen) {
        const { title, body } = notificationOpen.notification;
        this.showAlert(title, body);
    }
    /*
    * Triggered for data only payload in foreground
    * */
    this.messageListener = firebase.messaging().onMessage((message) => {
      //process data message
      console.log(JSON.stringify(message));
    });
  }
  
  showAlert(title, body) {
    Alert.alert(
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

