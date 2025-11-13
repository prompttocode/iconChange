import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { changeIcon } from '@computools/react-native-dynamic-app-icon';

const App = () => {


  useEffect(()=>{
      const fetchIconApp = async ()=>{
        try{
            const res = await fetch('http://192.168.1.48:3000')
            const data = await res.json()
            console.log(data.icon);
            setAppIcon(data.icon)
            
        }catch(e){
          console.log(e);
        }
      }
      fetchIconApp()
  },[])
  


  const setAppIcon = async (text:String) => {
  try {
    await changeIcon(`${text}`);
  } catch (error) {
    console.log(error);
  }
}
  return (
    <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
      {/* <Button title='đổi icon mèo khác ' onPress={()=>{changeIcon('Dog')}}/>
      <Button title='đổi icon mèo ' onPress={()=>{changeIcon('Cat')}}/> */}
        <Text>HIHIHI</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})