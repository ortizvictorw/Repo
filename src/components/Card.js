import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';
const cookies = new Cookies();


    class Card extends Component
    {
        state={}

    componentDidMount() {
        
         if(cookies.get('auth')){
            axios.get('http://churrasco.uk.to:3005/api/sites', {
                    headers: {
                    'Authorization': 'Bearer '+ cookies.get('auth')
                    }
                    })
                    .then((res) => {
                        const array= res.data.sites[0]
                        
                  
                        this.setState({
                            
                            imagen:array.url_imagen,
                            nombre:array.nombre,
                            descripcion:array.descripcion

                        
                        });
                        
                        
                        
                    })
                    .catch((error) => {
                    console.error(error)
                    })   
            
        
    
    }
}
render() {
   
    
    return (
        <div className="row d-flex justify-content-between"> 
            
            
         {Object.keys(Object.keys(this.state)).map((value,index)=>
         
         <div key={index}><div className="card col-11">
            <img src={this.state.imagen} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{this.state.nombre}</h5>
            <p className="card-text">{this.state.descripcion}</p>    
            </div>  
            </div>
        </div>)}
           
        </div>  
            
       
        
        )
            
       
    
}
}
export default Card
