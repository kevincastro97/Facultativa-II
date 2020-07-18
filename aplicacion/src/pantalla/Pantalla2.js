import React from 'react'

import {View, Text, Button} from 'react-native';

const Pantalla2 =(props)=>{

    const {cambiarPantalla} = props;

    return(
        <View>
            <Text>Pantalla 1</Text>
            <Button
                title = 'Ir a pantalla 1'
                colo = 'blue'
                onPress = {
                    () =>{
                        cambiarPantalla('pantalla1')
                    }
                }
            />
        </View>
    );
}

export default Pantalla2;