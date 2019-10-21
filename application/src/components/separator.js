import React from 'react';

import{
    View,
    StyleSheet,
} from 'react-native';

const Separator = () =>{

    return(

        <View style={styles.container}/>

    );
}


const styles = StyleSheet.create({

    container:{
        height: 5
    }
})

export default Separator;