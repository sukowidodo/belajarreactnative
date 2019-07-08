import firebase from 'react-native-firebase';
import {AsyncStorage} from 'react-native';

class MyFirebase {
    checkPermission = async ()=> {
        const enabled = await firebase.messaging().hasPermission();
        if (enabled) {
            getToken();
        } else {
            requestPermission();
        }
      }
    
    async getToken() {
        let fcmToken = await AsyncStorage.getItem('fcmToken');
        if (!fcmToken) {
            fcmToken = await firebase.messaging().getToken();
            if (fcmToken) {
                await AsyncStorage.setItem('fcmToken', fcmToken);
            }
        }
        await console.log('fcmToken'+fcmToken)
    }
      
    async requestPermission() {
        try {
            await firebase.messaging().requestPermission();
            // User has authorised
            this.getToken();
        } catch (error) {
            // User has rejected permissions
            console.log('permission rejected');
        }
    }
}

export default MyFirebase
  