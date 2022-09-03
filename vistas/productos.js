import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ProductosView = (props) => {
    return(
        <View style={styles.container}>
            <Button style={styles.buttons} title= 'Agregar Producto' onPress={ () => props.navigation.navigate('productosAdd')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttons: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ProductosView;