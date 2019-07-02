import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';
import { Container,Header,Content } from 'native-base';
import ItemArticle from '../components/ItemArticle';
import { FlatList } from 'react-native-gesture-handler';
import {getArticle} from '../services/Article'

class Home extends Component {

  static navigationOptions = ({navigation}) => {
    return{
      headerTitle:"hghghg",
      headerRight: (
        <Button
          style={{marginRight:10}}
          onPress={() => navigation.navigate('Add')}
          title="Add"
          color="blue"
        />
      ),
    }
  };

    state = {
      article : []
    }

    componentDidMount(){
      getArticle().then((res)=>{
          this.setState({article:res.data})
      })
    }

    render() {
      return (
        <Container>
        <Content>
          <FlatList
            data={this.state.article}
            keyExtractor ={(item, index) => index.toString()}
            renderItem = {({item}) =>(
                <ItemArticle
                  Title = {item.title}
                  Content = {item.content}
                  Image = {item.image}
                  Id = {item.id} 
                />
            )}
          />
        </Content>
      </Container>
      );
    }
  }

  export default Home;

