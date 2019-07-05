import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,FlatList} from 'react-native';
import { Container,Header,Content } from 'native-base';
import ItemArticle from '../components/ItemArticle';
import { getArticle } from '../services/Article'
import { connect } from 'react-redux';

class Home extends Component {

  static navigationOptions = ({navigation}) => {
    return{
      headerTitle:"hghghg",
      headerRight: (
        <Button
          style={{marginRight:10}}
          onPress={() => navigation.push('Add')}
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
    console.log("componentDidMount")
    getArticle().then((res)=>{
        this.setState({article:res.data})
    })
  }

  componentWillUnmount(){
    console.log("componentWillUnmount")
  }

    render() {
      return (
        <Container>
        <Content>
          <FlatList
            data={this.state.article}
            keyExtractor ={(item, index) => index.toString()}
            renderItem = {({item}) => 
            (
                <ItemArticle
                  Title = {item.title}
                  Content = {item.content}
                  Image = {item.image}
                  Id = {item.id} 
                  onPress = {() => this.props.navigation.navigate('Detail',{
                    title:item.title,
                    content:item.content,
                    cover:item.image
                  })}
                />
            )}
          />
        </Content>
      </Container>
      );
    }
  }

  const mapStateToProps = state => {
    console.log("mapStateToPropshome = ")
    console.log(state.articles.articles)
    return {
      article : state.articles.articles
    }
  }
  
  const mapDispatchToProps = dispatch => { 
    return {
      
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home)

