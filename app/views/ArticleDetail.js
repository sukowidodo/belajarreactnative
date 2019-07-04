import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
  } from 'react-native';

  class ArticleDetail extends Component {
      
    render(){

    const { navigation } = this.props;
    const title = navigation.getParam('title', '');
    const cover = navigation.getParam('cover', '');
    const content = navigation.getParam('content', 'some default value');

    return(
      <View>
        <Image source={{uri: cover}} style={{height: 200, width: null}}/>
        <Text>{title}</Text>
        <Text>{content}</Text>
      </View>
    ) 
    }
  }

  export default ArticleDetail;