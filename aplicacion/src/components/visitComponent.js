import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    TouchableOpacity
} from 'react-native'

const VisitComponent = (props) =>{

    const {onPressVisit} = props;

    return(
        <View>

            <View style = {styles.cont}>
                <Image  
                    source={require('../images/kevin.png')}
                    style = {styles.imagen}
                /> 

                <Text style = {styles.text}>Kevin Castro</Text>

                <View  style = {styles.buttons}>
                    
                    <TouchableOpacity
                        onPress = {onPressVisit}
                    >
                        <Text style = {styles.esti}>Principal</Text>
                    </TouchableOpacity>
                </View>

            </View>

            <View>
                <Text style = {styles.text1}>4 de sept. a las 5:26</Text>

                <Text style = {styles.text2}>La mejor pelicula del año...</Text>

                <View  style = {styles.container}>
                    <Image  
                        source={require('../images/c.jpg')}
                        style = {styles.imagen2}
                    /> 
                </View>

                <View style = {styles.ulti}>
                    <Image  
                        source={require('../images/cc.png')}
                        style = {styles.me}
                    /> 
                    <Text style = {styles.tr}>Kevin Castro</Text>
                    <Text style = {styles.ts}>2 comentarios</Text>
                </View>

                <View style = {styles.separador}></View>
            </View>

            <View style = {styles.h}>
                <View style = {styles.i}>
                    <Image  
                        source={require('../images/13429.png')}
                        style = {styles.im1}
                    /> 

                    <Text style = {styles.t1}>Me Gusta</Text>

                </View>
                   
                <View style = {styles.i}>
                    <Image  
                        source={require('../images/g.png')}
                        style = {styles.im2}
                    /> 

                    <Text style = {styles.t}>Comentar</Text>
                </View>
                    
                <View style = {styles.i}>
                    <Image  
                        source={require('../images/share-icon-computer-icons-button-button.jpg')}
                        style = {styles.im3}
                    /> 

                    <Text style = {styles.t}>Compartir</Text>
                </View>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    imagen: {
        width: 60,
        height: 60,
        marginLeft: 35
    },
    imagen2: {
        width: '98%',
        height: '84%',
        borderRadius: 15,
        marginTop: 5
    },
    im1: {
        width: 30,
        height: 30,
        marginTop: -1
    },
    im2: {
        width: 30,
        height: 30,
        marginTop: 3
    },
    im3: {
        width: 30,
        height: 30,
        marginTop: 2
    },
    me: {
        width: 30,
        height: 30,
        marginTop: -55,
        marginLeft: -55
    },
    tr:{
        marginTop: -46,
        marginLeft: -118
    },
    ts:{
        fontWeight: 'bold',
        marginTop: -46,
        marginRight: -56
    },
    cont: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
        marginLeft: -70
    },
    text: {
        color: 'black',
        fontWeight: 'bold',
        marginLeft: -65,
        marginTop: 10
    },
    text1: {
        color: 'black',
        fontWeight: 'normal',
        marginLeft: 65,
        marginTop: -35
    },
    text2: {
        color: 'black',
        fontWeight: 'normal',
        marginTop: 25,
        paddingLeft: 10,
        fontSize: 15
    },
    buttons: {
        backgroundColor: '#dfd9e6',
        borderRadius: 15,
        height: 35,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 8,
        marginRight: -28
    },
    esti:{
        fontSize: 16,
        color: '#13a9ae'
    },
    i:{
        marginTop: -50,
        marginLeft: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    t:{
        marginTop: 10,
        marginLeft: 5
    },
    t1:{
        marginTop: 10,
        marginLeft: 5,
        color: '#1296db'
    },
    h:{
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    separador:{
        borderColor: 'black',
        borderWidth: 0.5,
        marginTop: - 16
    },
    ulti:{
        flexDirection: 'row',
        justifyContent: 'space-around',
    }

})

export default VisitComponent;