import React from "react";
import {View, StyleSheet, Button } from 'react-native';

const ProductosView = (props) => {
    return(
        <View>
            <Button title='Agregar Producto' onPress={() => props.navigation.navigate('ProductosAdd')} />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alingnItems: 'center',
        justifyContent: 'center',
    },
    buttons: {
        flex: 1,
        backgroundColor: '#fff',
        alingnItems: 'center',
        justifyContent: 'center',
    }
})
export default ProductosView;