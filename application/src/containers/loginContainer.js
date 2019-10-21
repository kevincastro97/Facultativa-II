import React, {Component} from 'react';

import Login from '../components/login';
import Profile from '../components/profile';

class LoginContainer extends Component{

    constructor(props){
        super(props)

        this.state = {
            view: 'pantalla1',
            user: '',
        }
    }

    myUserEvent = (text)=>{
        this.setState({user: text,})
    }

    changeScreen  = ( screen ) => {

        this.setState({
            view: screen,
        })

    };

    render(){
        
        const {view, user} = this.state;

        if(view === 'pantalla1'){
            return(
                <Login
                   miOnChangeOfUser = {this.myUserEvent}
                   userName={user }
                   changeScreen = {this.changeScreen}
                   log = {user}
                />
            );
        }

        if(view === 'pantalla2'){
            return(
                <Profile
                    changeScreen = {this.changeScreen}
                    user = {user}
                />
            );
        }
    }
}

export default LoginContainer;