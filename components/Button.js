import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default class Button extends Component {
  render(){
    let props = this.props
    return (
      <TouchableOpacity
        onPress = {() => props.onPress()}
      >
      <View
      style = {[styles.container, { backgroundColor: props.backgroundColor }]}
      >
        <AntDesign name = {props.name} color = {props.color} size = {props.size}/>
        <Text style = {[styles.text, { padding: props.padding }]}>{props.text}</Text>
      </View>
      </TouchableOpacity>
    )
  }
}

Button.defaultProps = {
  onPress: () => {},
  padding: 8,
  size: 16
}
const styles = {
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justfifyContent: 'space-between',
    borderRadius: 16,
    margin: 8,
    padding: 8
  },
  text: {
    fontWeight: 'bold',
    color: 'white'
  }
}
