import React from 'react'
import Copyrigth from '../components/Copyrigth';
import Login from '../components/Login'

/* Styles */
import './fondo.css';

const Fondo = () => {
    return (
        
        <div className="gradient-full-screen d-flex ">
            <Login/>
            <Copyrigth/>
        </div>
    )
}

export default Fondo
