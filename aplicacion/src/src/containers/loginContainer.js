import React, {Component} from 'react';

import Login from '../components/login';
import Profile from '../components/profile';

class LoginContainer extends Component{

    constructor(props){
        super(props)

        this.state = {
            vista: 'pantalla1',
            Usuario: ''
        }
    }

    miEventoUsuario(){
        this.setState({Usuario: Text,})
    }

    cambiarPantalla  = ( pantalla ) => {

        this.setState({
            vista: pantalla,
        })

    };

    render(){
        
        const {vista} = this.state;

        if(vista === 'pantalla1'){
            return(
                <Login
                    miOnChangeDeUsuario = {this.miEventoUsuario}
                    nombreUsuario={ usuario }
                    cambiarPantalla = {this.cambiarPantalla}
                />
            );
        }

        if(vista === 'pantalla2'){
            return(
                <Profile
                    cambiarPantalla = {this.cambiarPantalla}
                />
            );
        }
    }
}

export default LoginContainer;