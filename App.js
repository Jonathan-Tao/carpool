import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, Button } from 'react-native';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

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

const Map = () => {

  return (
    <View>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
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
      <Map />
      <Textbox placeholder='type text here' />
      <ButtonComp alert="shit" title="Munkustrap" />
    </>
  )
}

export default main;