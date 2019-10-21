import React from 'react';

import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native';

const Perfil = (props) => {

    const { changeScreen, user } = props;

    return(
        <View>
            <View>
                <Image
                    style={styles.imagenPortada}
                    source={require('./../assets/portada.jpg')}
                />
            </View>
            <View
                style={styles.contenedorImagenPerfil}
            >
                <Image
                    style={styles.imagenPerfil}
                    source={require('./../assets/kevin.png')}
                />
                <View>
                    <Text
                        style={styles.nombre}
                    >
                        {user}
                    </Text>
                </View>
                <View>
                    <Text
                        style={styles.descripcion}
                    >
                        La confianza en ti mismo, es un paso para el éxito.
                    </Text>
                </View>
                <View
                    style={styles.redes}
                >
                    <Image
                        source={require('./../assets/facebook.png')}
                        style={styles.imagenRedes}
                    />
                    <Image
                        source={require('./../assets/twitter.png')}
                        style={styles.imagenRedes}
                    />
                    <Image
                        source={require('./../assets/github.png')}
                        style={styles.imagenRedes}
                    />

                    <View style={styles.butt}>
                        <TouchableOpacity
                            onPress = {
                                    () =>{
                                        changeScreen('pantalla1');
                                    }
                                }
                        >
                            <Text  style={styles.entrar}>Login</Text>
                        </TouchableOpacity>
                    </View> 
                    
                </View>

                <View  style={styles.cont}>
                    <Image
                        source={require('./../assets/img4.jpg')}
                        style={styles.img}
                    />
                     <Image
                        source={require('./../assets/img6.jpg')}
                        style={styles.img}
                    />
                     <Image
                        source={require('./../assets/img7.jpg')}
                        style={styles.img}
                    />
                </View>
                
            </View>

        </View>

    );

};

const styles = StyleSheet.create({
    contenedorImagenPerfil: {
        marginTop: -85,
        alignItems: 'center',
    },
    imagenPerfil: {
        width: 150,
        height: 150,
        borderRadius: 150,
        resizeMode: 'cover',
        borderWidth: 6,
        borderColor: '#fff',
    },
    imagenPortada: {
        width: Dimensions.get('window').width,
        height: 210,
        resizeMode: 'cover',
    },
    nombre: {
        fontSize: 32,
        marginTop: -5
    },
    descripcion: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: -5
    },
    redes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 106,
        marginTop: 5,
    },
    imagenRedes: {
        width: 32,
        height: 32,
        margin: 2
    },
    img: {
        width: 95,
        height: 100,
        marginLeft: 5,
        marginTop: -38,
        borderRadius: 10
    },
    butt:{
        marginTop: 8,
        backgroundColor: '#0066FF',
        borderRadius: 5,
        width: '55%',
        height: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 15
    },
    entrar: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    },
    cont:{
        flexDirection: 'row',
        justifyContent: 'center',
        width: 100,
        marginTop: 5
    }
});

export default Perfil;