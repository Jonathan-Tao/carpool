import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, Button } from 'react-native';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Textbox = (props) => {
  const [text, setText] = useState('')

  return (
    <View>
      <TextInput
        style={props.style}
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
      <Text style={styles.blackRegular, { padding: 10 }}>
        I am person who is cool
      </Text>
      <Button
        color="#841584"
        onPress={() => {
          alert(props.alert);
        }}
        title={props.title}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  textbox: {
    marginTop: 50,
    padding: 5,
  },
  smallerTextBox: {
    marginTop: 70,
    padding: 20,
  },
  blackRegular: {
    color: 'black',
    fontWeight: 'normal',
    fontSize: 10,
    padding: 10
  },
  redRegular: {
    color: 'red',
    fontWeight: 'normal',
    fontSize: 10,
    padding: 12
  },
  greenRegular: {
    color: 'green',
    fontWeight: 'normal',
    fontSize: 10,
    padding: 12
  }
})

const main = () => {
  return (
    <>
      <Textbox placeholder='Type your message here' style={styles.textbox} />
      <Textbox placeholder='Type the person you/re sending this to here' style={styles.smallerTextBox}/>
      <ButtonComp alert="shit" title="Munkustrap" />
    </>
  )
}

export default main;