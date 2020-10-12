import React from 'react'
import {Link} from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookies = new Cookies();


const Nav = () => {

    const cerrarSesion=()=>{
        if(cookies.get('auth')){
        cookies.remove('auth', {path: "/"});
        }
        window.location.href='./';
    }
    return (
       
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark row">
                <Link className="navbar-brand col-2 col-md-8" to="/about">CHURRASCO </Link>
           
                    <div className=" col-5 col-md-3 d-flex justify-content-md-end align-items-center" id="navbarNav">
                        <ul className=" d-flex justify-content-between my-auto col-6">
                            <li className="nav-item  ml-3 ">
                            <Link className="nav-link remember " to="#">sites</Link>
                            </li>
                            <li className="nav-item ml-3  ">
                            <button className="nav-link btn remember " onClick={cerrarSesion}>Logout</button>
                            </li>
                        </ul>
                    </div>
            </nav>
        
    )
}

export default Nav
