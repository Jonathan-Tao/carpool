import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, Button } from 'react-native';

const Textbox = (props) => {
  const [text, setText] = useState('')

  return (
    <View>
      <TextInput
        style={styles.textbox}
        placeholder={props.placeholder}
        onChangeText={text => setText(text)}
        defaultValue={text}
      />

      <Text style={styles.blackRegular}>
        {text.split(' ').map((word) => word && '🍕').join(' ')}
      </Text>

    </View>
  )

}

const ButtonComp = (props) => {

  return (
    <View>
      <Text style = {styles.blackRegular, {padding: 10} }>
        I am person who is cool
      </Text>
      <Button
        color="#841584"
        onPress={() => {
          alert('fuck off');
        }}
        title = {"fun time"}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  textbox: {
    marginTop: 50,
    padding: 5,
  },
  blackRegular: {
    color: 'red',
    fontWeight: 'normal',
    fontSize: 10,
    padding: 10
  }
})

const main = () => {
  return (
    <>
      <Textbox placeholder='type text here' />
      <ButtonComp name="Munkustrap" />
    </>
  )
}

export default main;