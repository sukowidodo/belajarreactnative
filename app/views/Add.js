import React, {Component} from 'react';
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

import {insertArticle} from '../services/Article'

class Add extends React.Component {

    state = {
      title:'',
      content:'',
      image:''
    }

    
    insert(){
      insertArticle({title:this.state.title, content:this.state.content, image:''}).then((res)=>{
        console.log(res);
      }).catch((err)=>{
        console.log(err);
      })
    }

    render() {
      return (
        <Container>
        <Content>
          <Form>
            <Item inlineLabel>
              <Label>Judul</Label>
              <Input onChangeText={(val)=>{this.setState({title:val});console.log("mystqte"+this.state.title)}}/>
            </Item>
            <Item inlineLabel>
              <Label>Content</Label>
              <Input onChangeText={(val)=>{this.setState({content:val})}}/>
            </Item>
          </Form>
          <Button onPress={()=>{
            console.log("dipencet"+this.state.title)
              this.insert()
          }}><Text>simpan</Text></Button>
        </Content>
      </Container>
      );
    }
  }

export default Add