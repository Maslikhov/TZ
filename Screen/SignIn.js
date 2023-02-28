import React,{useState,useRef,useCallback} from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  TextInput, 
  TouchableOpacity,
  SafeAreaView,
  ScrollView,

} from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import Constants from 'expo-constants';

import {DropDownPicker} from "react-native-dropdown-picker";

import { Entypo } from '@expo/vector-icons';

import * as SQLite from 'expo-sqlite';
import SelectDropdown from 'react-native-select-dropdown';


export default function SignIn({navigation}){


  const db = SQLite.openDatabase({ name: 'UserDatabase.db' });

  const [showDropDown, setShowDropDown] = useState(false);
  const [phone, setPhone] = useState(Number);
  const [name, setName] = useState();
  const [code, setCode] = useState();
  const [email, setEmail] = useState()
  const [visiblePass,setVisiblePass] = useState(true)
  const [visibleConfirmPass,setVisibleConfirmPass] = useState(true)

  const ref_input2 = useRef();
  const ref_input3 = useRef();
  const ref_input4 = useRef();

  const countries = [
    '+1',
    '+38',
    '+4',
    '+2'
  ];
  function ValidMail() {
    const regex = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    const valid = regex.test(email);
    if (valid == true) navigation.navigate('Edit',{
      email,name,phone,setName,setEmail,setPhone
    });
    else console.warn('Адрес электронной почты введен неправильно!');
    return valid;
  }
  
  return (
  <View style={styles.container}>
    <ScrollView>
      <View style={{alignItems:'center'}}>
        <Image 
          source={require('../image.png')}
          style={{height:100,width:100}}>
        </Image>
      </View>
      <View style={{alignItems:'center'}}>
        <Text style={styles.welcome}>
          Sign Up To Workroom
        </Text>
      </View>
      <View style={{alignItems:'flex-start'}}>
        <Text style={{
          color:'grey',
          fontSize:10,
          paddingRight:200,
          marginHorizontal:30,
          marginBottom:20 }}>
            Your Phone
        </Text>
      </View>
      <View style={{ flexDirection:'row', flex: 5}}>
        <SelectDropdown
          data={countries}
          // defaultValueByIndex={1}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          defaultButtonText={'Select country'}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          buttonStyle={styles.dropdown1BtnStyle}
          buttonTextStyle={styles.dropdown1BtnTxtStyle}
          renderDropdownIcon={isOpened => {
            return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={10} />;
          }}
          dropdownIconPosition={'right'}
          dropdownStyle={styles.dropdown1DropdownStyle}
          rowStyle={styles.dropdown1RowStyle}
          rowTextStyle={styles.dropdown1RowTxtStyle}
          selectedRowStyle={styles.dropdown1SelectedRowStyle}
          search
          searchInputStyle={styles.dropdown1searchInputStyleStyle}
          searchPlaceHolder={'Search here'}
          searchPlaceHolderColor={'darkgrey'}
          renderSearchInputLeftIcon={() => {
            return <FontAwesome name={'search'} color={'#444'} size={15} />;
          }}
        />
        <TextInput
          style={{
          flex:4,
          fontSize:15,
          borderWidth:1,
          borderRadius:10, 
          paddingVertical:10 ,
          borderColor:'silver',
          marginBottom:20, 
          marginLeft:25, 
          marginRight:30 }}
        />
      </View>
      <View style={{alignItems:'flex-start'}}>
        <Text style={styles.textName}>
          Your Code
        </Text>
      </View>
      <View style={{flexDirection:'row',flex:4,paddingRight:110}}>
        <TextInput
          maxLength={1}
          style={styles.code}
          autoFocus={true}
          returnKeyType="next"
          onSubmitEditing={() => ref_input2.current.focus()}
        />
        <TextInput
          maxLength={1}
          style={styles.code}
          returnKeyType="next"
          onSubmitEditing={() => ref_input3.current.focus()}
          ref={ref_input2}
        />
        <TextInput
           maxLength={1}
            style={styles.code}
            returnKeyType="next"
            onSubmitEditing={() => ref_input4.current.focus()}
            ref={ref_input3}
        />
        <TextInput
          maxLength={1}
          style={styles.code}
          ref={ref_input4}
        />
      </View>
      <View style={{alignItems:'flex-start'}}>
        <Text style={styles.textName}>
          Your Name
        </Text>
      </View>
      <TextInput
        onChangeText={(name)=>{setName(name)}}
        style={styles.textInput}>
      </TextInput>
      <View style={{alignItems:'flex-start'}}>
        <Text style={styles.textName}>
          Your Email
        </Text>
      </View>
      <TextInput
        id='email'
        onChangeText={(email)=>{setEmail(email)}}
        style={styles.textInput}>
      </TextInput>
      <View style={{alignItems:'flex-start'}}>
        <Text style={styles.textName}>
          Password
        </Text>
      </View>
      <View style={{flexDirection:'row',flex:6}}>
        <TextInput
          style={styles.passwordStyle}
          secureTextEntry={visiblePass}>
        </TextInput>
        <Entypo name="eye" size={20} color="black" onPress={()=>setVisiblePass(!visiblePass)} style={{flex:1}}  />
      </View>
      <View style={{alignItems:'flex-start'}}>
        <Text style={styles.textName}>
          Confirm Password
        </Text>
      </View>
      <View style={{flexDirection:'row',flex:6}}>
        <TextInput
          style={styles.passwordStyle}
          secureTextEntry={visibleConfirmPass}>
        </TextInput>
        <Entypo name="eye" size={20} color="black" onPress={()=>setVisibleConfirmPass(!visibleConfirmPass)} style={{flex:1}} />
      </View>
      <View>
        <TouchableOpacity
          style={styles.loginScreenButton}
          onPress={()=>ValidMail()}
          underlayColor='#fff'>
          <Text style={styles.loginText}>
            Next
          </Text>
        </TouchableOpacity >
      </View>
      <View style={{flexDirection:'row'}}>
        <Text 
          style={{marginLeft:130,
          color:'grey',
          fontSize:10,
          marginTop:10}}>
            Have Account?
        </Text>
        <TouchableOpacity
          onPress={() => ValidMail()}>
          <Text style={{color:'#FFD700',fontSize:10,marginTop:10, marginLeft:5,marginBottom:50}}>
            Log In
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
    marginHorizontal:40,
    marginVertical:20,
    paddingVertical:10,
    backgroundColor:'#FFD700',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  loginText:{
      color:'black',
      textAlign:'center',
      paddingHorizontal:80,
  },
  code:{
    flex:1,
    fontSize:15,
    borderWidth:1,
    borderRadius:10, 
    paddingVertical:10 ,
    borderColor:'silver',
    marginLeft:30,
    marginBottom:20 ,
    textAlign:'center'
  },
  textName:{
    color:'grey',
    fontSize:10,
    marginHorizontal:30,
    marginVertical:20
  },
  textInput:{
    fontSize:15,
    borderBottomWidth:1,
    borderColor:'silver',
    marginHorizontal:30,
    marginBottom:30,

  },
  passwordStyle:{
    fontSize:15,
    borderBottomWidth:1,
    borderColor:'silver',
    marginHorizontal:30,
    marginBottom:30,
    flex:5
},  placeholderStyles: 
{
  color: "grey"
},
  dropdown1BtnStyle: {
    flex:1,
    fontSize:15,
    borderWidth:1,
    borderRadius:10, 
    paddingVertical:10 ,
    backgroundColor: '#FFF',
    borderColor:'silver',
    marginBottom:20, 
    marginLeft:25, 
    marginRight:30,
    },
    dropdown1BtnTxtStyle:{
      fontSize:15,
      color: '#444', 
      textAlign: 'left'
    },dropdown1DropdownStyle: {backgroundColor: '#EFEFEF'},
    dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
    dropdown1RowTxtStyle: {color: '#444', textAlign: 'left'},
    dropdown1SelectedRowStyle: {backgroundColor: 'rgba(0,0,0,0.1)'},
    dropdown1searchInputStyleStyle: {
    backgroundColor: '#EFEFEF',
    borderRadius: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
    },
})
