import React, { Component } from 'react'
import { View, ImageBackground, Dimensions } from 'react-native'
import Button from './components/Button'

export default class SocialLogin extends Component {
  render(){
    return (
      <View style = {styles.container}>

        <View style = {styles.buttonsContainer}>

          <Button text = "Login with Facebook" name = 'facebook-square' size = {18} color = '#fff' backgroundColor = '#4267b2'/>
          <Button text = "Login with Instagram" name = 'instagram' size = {18} color = '#fff' backgroundColor = '#3f729b'/>
          <Button text = "Login with Twitter" name = 'twitter' size = {18} color = '#fff' backgroundColor = '#1DA1F2'/>

        </View>

      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: Dimensions.get('window').height * 0.15
  }
}
