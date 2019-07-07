import React from 'react';
import { AppLoading, Asset, Font, Icon } from 'expo';
// import AppNavigator from './navigation/AppNavigator';
import { Alert, Button, TextInput, View, StyleSheet, Image  } from 'react-native';
import {withNavigation} from "react-navigation";


class Login extends React.Component {
constructor(props) {
  super(props);
  
  this.state = {
    username: '',
    password: '',
    etat:0,
    loader:false
  };
}

onLogin() {
  const { username, password } = this.state;

  if(username==''|| username.length<5){
    Alert.alert('UserName !');

  }else if(password==''||isNaN(password)){
    Alert.alert('password !');

  }
else{
// this.setState({loader : true});
this.props.navigation.navigate('Home')


}
}

// showLoader () {
//   const{loader}= this.state;
//   if(loader==false){

//     return(
//       <Button
//       title={'Login'}
//       style={styles.input}
//       onPress={this.onLogin.bind(this)}
//      />
//     )
//   }else{
//     // return(
//     //   setTimeout(async ()=>{
//     //     <ActivityIndicator  style={styles.loader}/>
//     //   },3000)
//     // )
//     // this.props.navigation.navigate('Home')
//     return(<View><Text>helll</Text></View>)
//   }
 
// }

render() {
  return (

    <View style={styles.container}>  
      <Image source={require('../assets/images/backgd.jpg')} style={styles.backgroundImage}>
    </Image>

      <TextInput
        value={this.state.username}
        onChangeText={(username) => this.setState({ username })}
        placeholder={'Username'}
        style={styles.input}
      />
      <TextInput
        value={this.state.password}
        onChangeText={(password) => this.setState({ password })}
        placeholder={'Password'}
        secureTextEntry={true}
        style={styles.input}
      />
       <Button
       title={'Login'}
       style={styles.input}
      onPress={this.onLogin.bind(this)}
     />
      
           </View>


  );
}
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  // backgroundColor: '#ecf0f1',
  flex: 1,

},loader:{
  padding: 10,
  marginBottom: 10,

},
input: {
  width: 200,
  height: 44,
  padding: 10,
  borderWidth: 1,
  borderColor: 'black',
  marginBottom: 10,
  borderRadius :10,
  backgroundColor : '#FFFFFF'
},  backgroundImage: {
  flex: 1,
  width: '100%',
  height: '100%',
  resizeMode: 'cover',
  position : 'absolute'
},
// activityIndicator: {
//   flex: 1,
//   justifyContent: 'center',
//   alignItems: 'center',
//   height: 80,
//   flexDirection: 'row',
//   padding: 10
// }
}); 

export default withNavigation(Login);
