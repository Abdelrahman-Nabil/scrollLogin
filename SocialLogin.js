import React, { Component } from 'react'
import { View, ImageBackground, Dimensions } from 'react-native'
import Button from './components/Button'
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import InstagramLogin from 'react-native-instagram-login'

export default class SocialLogin extends Component {

  render(){
    return (
      <View style = {styles.container}>

        <View style = {styles.buttonsContainer}>

            <InstagramLogin
               ref= {ref => this.instagramLogin= ref}
               clientId='1e771f9439054e5c8c153a15a66c4580'
               redirectUrl='https://www.twigano.com'
               scopes={['public_content', 'follower_list']}
               onLoginSuccess={(token) => this.setState({ token })}
               onLoginFailure={(data) => console.log(data)}
           />

          <Button text = "Login with Twitter" name = 'twitter' size = {18} color = '#fff' backgroundColor = '#1DA1F2'/>

          <Button onPress = {() => this.instagramLogin.show()} text = "Login with Instagram" name = 'instagram' size = {18} color = '#fff' backgroundColor = '#3f729b'/>

          <LoginButton
              onLoginFinished={
                (error, result) => {
                  if (error) {
                    console.log("login has error: " + result.error);
                  } else if (result.isCancelled) {
                    console.log("login is cancelled.");
                  } else {
                    console.log("login success.")
                    AccessToken.getCurrentAccessToken().then(
                      (data) => {
                        console.log(data.accessToken.toString())
                      }
                    )
                  }
                }
              }
              readPermissions = {['email']}
              onLogoutFinished={() => console.log("logout success.")}
          />
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
