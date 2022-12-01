import React from 'react';
import './Navbar.css';

function Navbar() {
    return(
        <nav className='navbar navbar-expand-lg shadow' id='container'> 
            <div className='container-fluid' id='container-navbar'>
                <a className='navbar-brand' href='/'>
                    <img src={require('../Navbar/imagen-logo/image-logo.png')} alt='Logotipo Empresa'/>
                </a>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#nav'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbar'>
                    <ul className='navbar-nav ms-auto gap-4'>
                        <li className='nav-item'>
                            <a className='nav-link active' aria-current='page' href='/'>Ecosistema</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link active' aria-current='page' href='/'>Startups</a>
                        </li>
                        <li className='nav-item dropdown'>
                            <a className='nav-link dropdown-toggle active' href='/' role='button' data-bs-toggle='dropdown'>
                                Comunidades 
                            </a>
                            <ul className='dropdown-menu'>
                                <li>
                                    <a className='dropdown-item' href='/'>Meet up</a> 
                                </li>
                                <li>
                                    <a className='dropdown-item' href='/'>Conoce las comunidades</a> 
                                </li>
                            </ul>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link active' aria-current='page' href='/'>The team</a> 
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link active' aria-current='page' href='/'>Eventos</a> 
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link active' aria-current='page' href='/'>Contáctanos</a>
                        </li> 
                        <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
                            <button className='btn btn-outline-primary' type='button'>
                                Login 
                            </button>
                            <button className='btn btn-outline-warning' type='button'>
                                Sign-up 
                            </button>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar; 