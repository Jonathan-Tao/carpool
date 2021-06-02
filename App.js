import React, { useState } from 'react';
import { Text, TextInput, TextPropTypes, View, StyleSheet } from 'react-native';

const Textbox = (props) => {
  const [text, setText] = useState('')

  return (
    <View> 
      <TextInput 
        style = {styles.textbox}
        placeholder = {props.placeholder}
        onChangeText = {text => setText(text)}
        defaultValue = {text}
      />

      <Text style = {styles.blackRegular}>
        {text.split(' ').map((word) => word && '🍕').join(' ')}
      </Text>

    </View>
  )

}

const styles = StyleSheet.create({
  textbox: {
    marginTop: 50,
    padding: 100,
  },
  blackRegular: {
    color: 'red',
    fontWeight: 'normal',
    fontSize: 42,
    padding: 10
  }
})

const main = () => {
  return (
    <>
       <Textbox placeholder = 'type text here'/>
    </>
  )
}

export default main;