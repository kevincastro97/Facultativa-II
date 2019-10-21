import React from 'react';
import Separator from './separator'
import Linea from './linea'

import{
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    Dimensions,
} from 'react-native';

const Login = (props) =>{

    const { changeScreen, miOnChangeOfUser, userName , log} = props;

    return(

        <View>

            <View>
                <Image 
                    source={require('../assets/facebook.jpg')}
                    style={styles.imageLogin}
                />
            </View>

            <View style={styles.container}>

                <Text style={styles.idioma}>Español</Text>

                <Separator/>

                <View style={styles.text}>
                    <TextInput
                        placeholder = 'Nombre de usuario'
                        onChangeText={miOnChangeOfUser}
                        value={userName}  
                        defaultValue = {log} 
                    />
                </View>

                <Separator/>

                <View style={styles.button}>
                    <TouchableOpacity
                        onPress = {
                                () =>{
                                    changeScreen('pantalla2');
                                }
                            }
                    >
                        <Text  style={styles.entrar}>Entrar</Text>
                    </TouchableOpacity>
                </View>      

                <TouchableOpacity>
                    <Text style={styles.texto}>¿Has olvidado tu contraseña?</Text>     
                </TouchableOpacity>
                    
                <View style={styles.line}>
                    <Linea/>
                    <Text style={styles.letrax}>o</Text>
                    <Linea/>
                </View>

                <View style={styles.button1}>
                    <TouchableOpacity>
                        <Text  style={styles.letra}>Crea cuenta de facebook</Text>
                    </TouchableOpacity>
                </View> 
                
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    imageLogin: {
        width: Dimensions.get('window').width,
        height: 230,
        resizeMode: 'cover',
    },
    idioma: {
        marginTop: 5
    },
    text:{
        borderColor: 'black',
        borderWidth: 1,
        width: '80%',
        height: '12%',
        borderRadius: 20,
        marginTop: 20,
    },
    container:{
        alignItems: 'center'
    },
    button:{
        backgroundColor: '#0066FF',
        borderRadius: 5,
        width: '80%',
        height: '12%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
    },
    button1:{
        backgroundColor: '#006600',
        borderRadius: 5,
        width: '50%',
        height: '12%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
    },
    entrar:{
        color: 'white',
        fontSize: 18
    },
    texto:{
        color: 'blue',
        marginTop: 15,  
    },
    letrax:{
        marginLeft: 5,
        marginRight: 5
    },
    line:{
        flexDirection: 'row',
        justifyContent: 'center',
    },
    letra:{
        color: 'white',
        fontWeight: 'bold'
    }
})

export default Login;