import React,{useState} from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  TextInput, 
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { FontAwesome } from '@expo/vector-icons';

import * as SQLite from 'expo-sqlite';

export default function EditScreen({navigation, route}){
  const [photos, setPhotos]= useState();
  const [position, setPosition] = useState()
  const [skype, setSkype] = useState()

  const { email, name ,setName,setEmail,setPhone,phone} = route.params

  const db = SQLite.openDatabase({ name: 'UserDatabase.db' });


  const showImagePicker = async () => {

    const result = await ImagePicker.launchImageLibraryAsync();

    if (!result.deprecated) {
      setPhotos(result.uri);
    }
    
  }
  return (
  <View style={styles.container}>
    <View style={{alignItems:'center'}}>
      <Text style={{fontWeight:'400',fontSize:20,marginBottom:20}}>
        Edit Profile
      </Text>
      <ImageBackground
        source={{uri: photos}}
        style={{
          position:'relative', 
          width: 100, 
          height: 100, 
          alignItems: 'center', 
          justifyContent:'flex-start', 
          overflow:'hidden',
          borderRadius:100 }} >
        <FontAwesome 
            style={{position:'absolute',bottom:10,right:10}} 
            size={20}
            color='black' 
            name='pencil'
            onPress={showImagePicker}/>
      </ImageBackground>
    </View>
    <View style={{alignItems:'center'}}>
      <Text style={styles.welcome}>
        {name}
      </Text>
      <Text style={{fontSize:18,color:'grey'}}>
        {position}
      </Text>
    </View>
    <View style={{alignItems:'flex-start'}}>
      <Text style={styles.textPlace}>
        Name
      </Text>
    </View>
      <TextInput
        style={styles.inputPlace}
        onChangeText={setName()}
        value={JSON.stringify(name)}
      />
    <View style={{alignItems:'flex-start'}}>
      <Text style={{
        color:'grey',
        fontSize:10,
        marginHorizontal:30,
        marginVertical:20}}>
          Email
      </Text>
    </View>
    <TextInput
      style={styles.inputPlace}
      onChangeText={email=>{setEmail(email)}}
      value={JSON.stringify(email)}
    />
    <View style={{alignItems:'flex-start'}}>
      <Text style={styles.textPlace}>
        Phone
      </Text>
    </View>
    <TextInput
      style={styles.inputPlace}
      onChangeText={setPhone()}
      value={JSON.stringify(phone)}
    />
    <View style={{alignItems:'flex-start'}}>
      <Text style={styles.textPlace}>
        Position
      </Text>
    </View>
    <TextInput
      style={styles.inputPlace}
      onChangeText={setPosition}
      value={position}
    />
    <View style={{alignItems:'flex-start'}}>
      <Text style={styles.textPlace}>
        Skype
      </Text>
    </View>
    <TextInput
      style={styles.inputPlace}
      onChangeText={setSkype}
      value={skype}
    />
    <View>
      <TouchableOpacity
        style={styles.loginScreenButton}
        onPress={()=>navigation.navigate('LogIn')}>
        <Text style={styles.loginText}>
          Save
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
    paddingTop:60
  },
  welcome:{
    alignItems:'center',
    fontSize:25, 
    fontWeight:'500',
    marginTop:10
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
  inputPlace:{
    fontSize:15,
    borderBottomWidth:1,
    borderColor:'silver',
    marginHorizontal:30,
    marginBottom:20
  },
  textPlace:{
  color:'grey',
  fontSize:10,
  paddingRight:200,
  marginHorizontal:30,
  marginVertical:20
  }
})
