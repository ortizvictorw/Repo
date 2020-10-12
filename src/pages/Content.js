/* import axios from 'axios'; */
import React, { Component } from 'react';




import Card from '../components/Card';
import Nav from '../components/Nav';



/* Styles */
import './fondo.css';



class Content extends Component
 {
    

render() {
    return (
        
        <div className="gradient-full-screen ">
            <Nav  />
            <div className="container mb-4">
                <h1 className="remember mt-5 mb-4">Hey! Welcome to Churraso Travel</h1>
                <h3 className="remember ">These are some of the destinations we can offer FOR FREE!</h3>
                <p className="remember">DICLAIMER : we only offer Google Maps bases travels</p>
                <p className="remember mb-5">if you have any issues while traveling... it´s Gogle´s fault</p>
                <div className="d-flex justify-content-between ">
                <Card />
                </div>
            </div>
            
            
                
        </div>
    )

}
}

export default Content
