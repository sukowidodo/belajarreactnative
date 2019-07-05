import React, {Component} from 'react';
import {
    Platform, 
    StyleSheet, 
    Text, 
    Image,
    View
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';


class ItemArticle extends React.Component {
    render() {

      console.log(this.props.image)

      return (
        <Card style={{marginLeft:20, marginRight:20}} borderRadius={10}>
        <CardItem cardBody>
          <Image source={{uri: this.props.Image}} style={{height: 200, width: null, flex: 1}}/>
        </CardItem>
        <CardItem>
          <Text>{this.props.Title}</Text>
        </CardItem>
        <CardItem>
        <Text>{this.props.Content}</Text>
        </CardItem>
        <CardItem>
          <Right>
            <Button rounded onPress={this.props.onPress}>
              <Text style={{color:"white"}}>Read more</Text>
            </Button>
          </Right>
        </CardItem>
      </Card>
      );
    }
  }

export default ItemArticle