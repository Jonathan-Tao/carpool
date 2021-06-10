import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, Button } from 'react-native';
import MapView from 'react-native-maps';

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
        style={props.style}
      />
    </View>
  );
}

const Map = (props) => {

  return (
    <View>
      <MapView
        initialRegion={{
          latitude: props.latitude,
          longitude: props.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  )
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
  },
  blueRegular: {
    color: 'blue',
    fontWeight: 'normal',
    fontSize: 10,
    padding: 12
  }
})

const main = () => {
  return (
    <>
      <Textbox placeholder='Type your message here' style={styles.textbox} />
      <ButtonComp alert="Picking up" title="I will Pickup" />
      <ButtonComp alert="Not Picking up" title="I cannot Pickup" />
      <Map latitude = {37.78825} longitude = {-122.4324} />
    </>
  )
}

export default main;