import React, { Component } from 'react';
import ImagePicker from 'react-native-image-picker';
import {article_type} from '../actions/myaction';
import { updateStateArticle } from '../actions/myaction'
import { connect } from 'react-redux';
import {
  Container,
  Header,
  Content,
  Form,
  FormItem,
  Item,
  Input,
  Label,
  Button
} from 'native-base';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { insertArticle,getArticle } from '../services/Article'

class Add extends React.Component {

  state = {
    title: '',
    content: '',
    image: '',
    uri:'',
    articles:[]
  }

  insert() {
    let article = { 
      title: this.state.title, 
      content: this.state.content, 
      uri: this.state.uri 
    };

    insertArticle(article).then((res) => {
      alert("Berhasil")
    }).then(()=>{
      getArticle().then((result)=>{
        console.log(result.data);
        this.setState( 
          { articles : result.data }
        )
        console.log(this.state.articles);
        this.props.updateArticle(this.state.articles);
        this.props.navigation.push('Home')
    })
    
    
    }).catch((err) => {
      console.log(err);
    })
  }

  // updateArticle(){
  //   console.log("componentDidMount")
    
  // }

  getImage(){
    ImagePicker.showImagePicker(
      {
        title: 'Select file',
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      }, (response) => {
      console.log('Response = ', response);
      this.setState({
        uri: response.uri,
      });
    });
  }

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Judul</Label>
              <Input onChangeText={(val) => { this.setState({ title: val }) }} />
            </Item>
            <Item floatingLabel>
              <Label>Content</Label>
              <Input onChangeText={(val) => { this.setState({ content: val }) }} />
            </Item>
            <Button rounded onPress={() => { this.getImage() }}>
              <Text style={styles.Textkene}>Upload</Text>
            </Button>
            <Button rounded onPress={() => { this.insert() }}>
              <Text style={styles.Textkene}>simpan</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  Textkene: { color: 'white', padding: 10 },
})

const mapStateToProps = state => {
  console.log("mapStateToProps = ")
  console.log(state)
  return {
    articles : state.articles
  }
}

const mapDispatchToProps = dispatch => { 
  return {
    updateArticle : (articles) => dispatch(updateStateArticle(articles))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Add)
