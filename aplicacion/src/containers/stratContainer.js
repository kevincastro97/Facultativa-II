import React, {Component} from 'react';
import StartComponent from '../components/startComponent';
import VisitComponent from '../components/visitComponent';


class StartContainer extends Component {

    constructor(props){
        super(props);

        this.state = {
            screen: 'one',
            control: false,
        }
    }

    miEventoStart = () =>{
        const {screen} = this.state;
        if(screen === 'one'){
            this.setState({
                control: true,
                screen: 'two',
            })
        }
    }
    
    miEventoVisit = () =>{
        const {screen} = this.state;
        if(screen === 'two'){
            this.setState({
                control: false,
                screen: 'one',
            })
        }
    }

    isControl = () => {

        const { control } = this.state;

        return control;

    };

    render(){

        if(this.isControl()){
            return(
                <VisitComponent
                onPressVisit = {this.miEventoVisit}
            />
            )
        } else {
            return(
                 <StartComponent
                    onPressStart = {this.miEventoStart}
                />            
            )
        }
    } 

}

export default StartContainer;