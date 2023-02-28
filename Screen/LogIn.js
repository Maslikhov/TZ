import React,{useState,useEffect} from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  TextInput, 
  TouchableOpacity,
  Button,
} from 'react-native';

import * as SQLite from 'expo-sqlite';

export default function LogIn({ navigation }){

  const [hidePass, setHidePass] = useState(true);
  const [number, onChangeNumber] = useState('');
  const [text, onChangeText] = useState('');


  const db = SQLite.openDatabase({ name: 'UserDatabase.db' });


  // useEffect(() => {
  //   db.transaction((tx) => {
  //     tx.executeSql(
  //       'SELECT * FROM table_user',
  //       [],
  //       (tx, results) => {
  //         const temp = [];
  //         for (let i = 0; i < results.rows.length; ++i)
  //           temp.push(results.rows.item(i));
  //         setFlatListItems(temp);
  //       }
  //     );
  //   });
  // }, []);
  // let listItemView = (item) => {
  //   return (
  //     <View
  //       style={{ backgroundColor: 'white', padding: 20 }}>
  //       <Text>Name: {item.email}</Text>
  //       <Text>Contact: {item.password}</Text>
  //     </View>
  //   );
  // };


  
  return (
  <View style={styles.container}>
    <View style={{alignItems:'center'}}>
      <Image source={require('../image.png')}
      style={{height:100,width:100}}>
      </Image>
    </View>
    <View style={{alignItems:'center'}}>
      <Text style={styles.welcome}>Log In to Workroom</Text>
    </View>
    <View style={{alignItems:'flex-start'}}>
      <Text style={{color:'grey',fontSize:10,paddingRight:200,marginHorizontal:30}}>
        Email
      </Text>
    </View>
      <TextInput
        style={styles.pleceInput}
        onChangeText={onChangeText}
        value={text}
      />
    <View style={{alignItems:'flex-start'}}>
      <Text style={{color:'grey',fontSize:10,marginHorizontal:30}}>
          Password
      </Text>
    </View>
    <TextInput
      style={styles.pleceInput}
      secureTextEntry={true}>
    </TextInput>
    <View style ={{alignItems:'flex-end'}}>
      <Text style={{color:'grey',fontSize:10,marginRight:30,marginBottom:50}}>
        Forgot password?
      </Text>
    </View>
    <View>
      <TouchableOpacity
        style={styles.loginScreenButton}
        onPress={() => navigation.navigate('Sign')}>       
        <Text style={styles.loginText}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
    <View style={{flexDirection:'row'}}>
      <Text 
        style={{marginLeft:130,
        color:'grey',
        fontSize:10,
        marginTop:20}}>
          New User?
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Sign')}>
        <Text style={{color:'#FFD700',fontSize:10,marginTop:20, marginLeft:5}}>
          Create Account
        </Text>
      </TouchableOpacity>
    </View>
  </View>

)
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    paddingTop:100
  },
  welcome:{
    alignItems:'center',
    fontSize:25, 
    fontWeight:'500',
    marginBottom:40,
    marginTop:80
  },
  loginScreenButton:{
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#FFD700',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  loginText:{
      color:'black',
      textAlign:'center',
      paddingLeft : 80,
      paddingRight : 80
  },
  pleceInput:{
    fontSize:15,
    borderBottomWidth:1,
    borderColor:'silver',
    marginHorizontal:30,
    marginVertical:20 
  }
})
