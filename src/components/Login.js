import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import Cookies from 'universal-cookie';



const baseUrl="http://churrasco.uk.to:3005/api/auth/";
const cookies = new Cookies();



class Login extends Component {
    //state del input
    state={
        form:{
            username: '',
            password: ''
        }
    }
//captura lo que se escribe ene el input
    handleChange=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }
//inicio de session
    iniciarSesion=async()=>{
        await axios.post(baseUrl,  {email: this.state.form.username, password: this.state.form.password})
        .then(response=>{
            return response
        })
        .then(response=>{
            
            let {data} = response;
            
            let recuerdame = document.getElementById("recuerdame").checked;
            if(recuerdame){
                cookies.set('auth', data , {path: "/"});
                
                window.location.href="./menu";

            }else if(data){
                
                cookies.set('auth', data , {path: "/"});
                window.location.href="./menu"; 
             
            }else{
                alert('El usuario o la contraseña no son correctos');
            }
        })
        .catch(error=>{
            console.log(error);
        })

        
        
        
        
}

    componentDidMount() {
        if(cookies.get('auth')){
            window.location.href="./menu";
        }
    }

    
    

    render() {
        return (
    
        <div className="containerPrincipal ">
            <div className='d-flex justify-content-center my-4'><img src='LOGO1.png' alt="imagen" className=' img-fluid w-50 ' /></div>
            
            
            <div className="form-group">
                
                <input
                type="text"
                placeholder=" &#xf007;   Username"
                className="form-control inputName  "
                name="username"
                onChange={this.handleChange}
                />
                <input
                type="password"
                placeholder=" &#xf13e;   Passdword"
                className="form-control inputPass "
                name="password"
                onChange={this.handleChange}
                />
                <div className=" d-flex  justify-content-between  align-items-center">
                    <div className="ml-3 d-flex  justify-content-between  align-items-center">
                        <input type="checkbox" className=" "  id="recuerdame"/> <span className=" remember ml-2">remember</span> 
                    </div>
                <button className="btn login my-2  float-right" onClick={()=> this.iniciarSesion()}>Log in</button>
                </div>
            </div>
            
        </div>
       
        );
    }
}

export default Login;