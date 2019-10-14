import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    SafeAreaView
} from 'react-native'

const StartComponent = (props) =>{

    const {onPressStart} = props;

    return(
        <View  style = {styles.container}>
            <View style = {styles.conten}>
                <View style = {styles.conten}>
                    <Image  
                        source={require('../images/imagenFondo.jpg')}
                        style = {styles.imagen}
                    />
                
                </View>

                <View style = {styles.conten}>
                    <Image  
                        source={require('../images/kevin.png')}
                        style = {styles.imagen2}
                    />

                </View>

                <View style = {styles.txtcont}>
                    <Text style = {styles.nombre}>Kevin Castro</Text>

                    <Text style = {styles.text}>Si no conoces mi esfuerzo, no critiques mi exito!!!</Text>
                </View>

            </View> 
            
            <View style = {styles.img}>
                <Image  
                    source={require('../images/2.png')}
                    style = {styles.img1}
                />
                
                <View style = {styles.div}></View>
                
                <Image  
                    source={require('../images/4.png')}
                    style = {styles.img1}
                />

                <View style = {styles.div}></View>

                <Image  
                    source={require('../images/1.png')}
                    style = {styles.img1}
                />

                <View style = {styles.div}></View>

                    <Image  
                        source={require('../images/3.png')}
                        style = {styles.img1}
                    />
                </View>

                <View style = {styles.fila}>
                    <Text style = {styles.photos}>My Photos</Text>

                    <View  style = {styles.buttons}>
                    
                        <TouchableOpacity
                            onPress = {onPressStart}
                        >
                            <Text style = {styles.esti}>Publicaciones</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            <View style = {styles.img}>
                <Image  
                    source={require('../images/n1.jpg')}
                    style = {styles.fot}
                />

                <View style = {styles.div1}></View>

                <Image  
                    source={require('../images/n2.jpg')}
                    style = {styles.fot}
                />

                <View style = {styles.div1}></View> 

                <Image  
                    source={require('../images/n3.jpg')}
                    style = {styles.fot}
                />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    imagen: {
        width: '100%',
        height: 180,
    },
    imagen2: {
        width:150,
        height: 150,
        marginTop: -85
    },
    imagen3: {
        width:150,
        height: 150,
    },
    img: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 7
    },
    div:{
        width: 5
    },
    div1:{
        width: 8
    },
    img1: {
        width: 30,
        height: 30,
    },
    conten:{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center'
    },
    nombre: {
        fontSize: 25,
        marginTop: -5
    },
    txtcont: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        fontSize: 14,
        fontWeight: 'normal',
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: -2
    },
    buttons: {
        backgroundColor: '#dfd9e6',
        borderRadius: 15,
        height: 35,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    fila: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center'
        
    },
    photos: {
        fontSize: 20,
        color: '#13a9ae',
        marginTop: 15,
        marginRight: 110,
        marginLeft: 0
    },
    esti: {
        color: '#13a9ae',
    },

    fot:{
        marginTop: 5,
        width: 95,
        height: 120,
    },
    borde:{
        borderRadius: 5
    }
})


export default StartComponent;