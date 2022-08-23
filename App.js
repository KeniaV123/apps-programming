import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Switch, Modal, Pressable, SafeAreaView, Button, Alert } from "react-native";

const Separator = () => (
  <View style={paginaPrincipal.separator} />
);

const App = () => {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [modalVisible, setModalVisible] = useState(false);
 
  return(
    <SafeAreaView style={paginaPrincipal.container}>
    <View>
      <Image
          style={paginaPrincipal.tinyLogo}
          source={{
            uri: 'https://i.pinimg.com/736x/86/5c/40/865c40a5a12fba846c9042003409c5d0.jpg',
          }}
        />
      <Text style={estiloPlano}>Práctica 2</Text>
      <Text>Estilo:</Text>
      <Text style={paginaPrincipal.code}>
        {JSON.stringify(estiloPlano, null, 2)}
      </Text>
    </View>

    <Separator />

    <View style={paginaPrincipal.fixToText}>
    <Button
        title="Left button"
        onPress={() => Alert.alert('hola izquierdo')}
      />
      <Button
        title="Right button"
        onPress={() => Alert.alert('hola derecho')}
      />
    </View>

    <View style={paginaPrincipal.container}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>

    <View style={stylePage.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={stylePage.centeredView}>
          <View style={stylePage.modalView}>
            <Text style={stylePage.modalText}>Hii!</Text>
            <Pressable
              style={[stylePage.button, stylePage.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={stylePage.textStyle}>Close modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[stylePage.button, stylePage.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={stylePage.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  </SafeAreaView>
  );
}


const stylePage = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "pink",
  },
  buttonClose: {
    backgroundColor: "pink",
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

const paginaPrincipal = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    backgroundColor: "#ECE2C6",
    marginHorizontal:16,
    marginVertical:16
  },
  text: {
    color: "#000",
    fontSize: 14,
    fontWeight: "bold"
  },
  code: {
    marginTop: 12,
    padding: 12,
    borderRadius: 8,
    color: "#666",
    backgroundColor: "#FFFFED"
  },
  tinyLogo: {
    width: 60,
    height: 60,
    
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
   
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: 'red',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

const estiloLetra = StyleSheet.create({
  header: {
    color: "#FF33E9",
    fontSize: 30,
    marginBottom: 36
  }
});

const estiloPlano = StyleSheet.flatten([
  paginaPrincipal.text,
  estiloLetra.header
]);


export default App;