import React from 'react';

import{
    View,
    Text,
    StyleSheet,
    TextInput,
    Button
} from 'react-native';

const Profile = (props) =>{

    const { cambiarPantalla, Usuario } = props;

    return(

        <View>
            <Text> {Usuario}</Text>
            <Button
                title = 'Ir a la pantalla 1'
                color = 'red'

                onPress = {
                    () =>{
                        cambiarPantalla('pantalla1');
                    }
                }
            />
        </View>

    );
}

export default Profile;