import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import Content from './Content';

const cookies = new Cookies();

class Menu extends Component {
    

    componentDidMount() {
        if(!cookies.get('auth')){
            window.location.href="./";
        }
    }

    render() {
       
        return (
            <div>
                <Content/>

            </div>
        );
    }
}

export default Menu;