import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';



export default class MenuButton extends Component{
  render() {
    return (
        <Ionicons
                name="md-menu"
                size={32}
                color="#000000"
                style={styles.menuIcon}
                onPress = {() => this.props.navigation.toggleDrawer()}
        />
    );
  }
}

const styles = StyleSheet.create({
  menuIcon:{
    zIndex:9,
    position: 'absolute',
    top:40,
    left:20
  }
});
