import React, {Component} from 'react';
import {
    Platform, 
    StyleSheet, 
    Text, 
    View
} from 'react-native';

class ItemArticle extends React.Component {
    render() {
      return (
        <Card>
        <CardItem cardBody>
          <Image source={{uri: this.props.Image}} style={{height: 200, width: null, flex: 1}}/>
        </CardItem>
        <CardItem>
          <Text>{this.props.Title}</Text>
          <Text>{this.props.Content}</Text>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <Icon active name="thumbs-up" />
              <Text>12 Likes</Text>
            </Button>
          </Left>
          <Body>
            <Button transparent>
              <Icon active name="chatbubbles" />
              <Text>4 Comments</Text>
            </Button>
          </Body>
          <Right>
            <Text>11h ago</Text>
          </Right>
        </CardItem>
      </Card>
      );
    }
  }

export default ItemArticle