import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Button,Container,Header,Content } from 'native-base';
import ItemArticle from '../components/ItemArticle';
import { FlatList } from 'react-native-gesture-handler';

class Home extends Component {

    static navigationOptions = {
        title: 'Beranda',
    };

    render() {
      return (
        <Container>
        <Content>
          <Button 
          style={{margin:100}}
          onPress={()=>{
            this.props.navigation.navigate('Add')
          }}
          ><Text>Click Me!</Text></Button>
          {/* <FlatList
            data={}
            renderItem={}
            keyExtractor ={}
          /> */}
        </Content>
      </Container>
      );
    }
  }

  export default Home;

