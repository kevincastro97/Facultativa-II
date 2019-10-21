import React from 'react'

import {View, Text, Button} from 'react-native';

const Pantalla1 =(props)=>{

    const {cambiarPantalla} = props;

    return(
        <View>
            <Text>Pantalla 10</Text>
            <Button
                title = 'Ir a pantalla 2'
                colo = 'blue'
                onPress = {
                    () =>{
                        cambiarPantalla('pantalla2')
                    }
                }
            />
        </View>
    );
}

export default Pantalla1;