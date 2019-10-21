import React from 'react';

import{
    View,
    StyleSheet,
} from 'react-native';

const Linea = () =>{

    return(

        <View style={styles.container}/>

    );
}


const styles = StyleSheet.create({

    container:{
        borderWidth: 0.5,
        width: '40%',
        height: '1%',
        marginTop: 12,
    }
})

export default Linea;