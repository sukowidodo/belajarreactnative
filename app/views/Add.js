import React, { Component } from 'react';
import ImagePicker from 'react-native-image-picker';
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

import { insertArticle } from '../services/Article'

class Add extends React.Component {

  state = {
    title: '',
    content: '',
    image: '',
    uri:'',
  }

  insert() {
    insertArticle({ title: this.state.title, content: this.state.content, uri:this.state.uri }).then((res) => {
      alert("Berhasil")
    }).catch((err) => {
      console.log(err);
    })
  }

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
            <Item inlineLabel>
              <Label>Judul</Label>
              <Input onChangeText={(val) => { this.setState({ title: val }) }} />
            </Item>
            <Item inlineLabel>
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

export default Add

const styles = StyleSheet.create({
  Textkene: { color: 'white', padding: 10 },
})