import React, {Component} from 'react'

import Pantalla1 from './pantalla1'
import Pantalla2 from './pantalla2'

class Contenedor extends Component{

    constructor(props){
        super(props)

        this.state = {
            vista: 'Pantalla1'
        }
    }

    cambiarPantalla = (Pantalla) =>{
        this.setState({
            vista: Pantalla
        })
    }

    render(){
        const {vista} = this.state;

        if(vista === 'pantalla1'){
            return(
                <Pantalla1
                    cambiarPantalla= {this.cambiarPantalla}
                />
            )
        } 

        if(vista === 'pantalla2'){
            return(
                <Pantalla2
                    cambiarPantalla= {this.cambiarPantalla}
                />
            )
        } 
    }
}

export default Contenedor;