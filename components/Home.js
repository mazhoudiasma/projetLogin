import React from 'react';
import { AppLoading, Asset, Font, Icon } from 'expo';
import {  Text, View, StyleSheet} from 'react-native';



export default class Home extends React.Component {
constructor(props) {
  super(props);
  
 
}



render() {
  return (
    
<View style={styles.container}>
<Text>hello</Text>
</View> 

  
  )
}}

const styles = StyleSheet.create({
container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  // backgroundColor: '#ecf0f1',
  flex: 1,
 marginTop : 15
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


