import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/eco-energy.png';

export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/AddUser">
                        <img src={logo} alt="TraskTrack Logo" width="50" height="50" className="d-inline-block align-text-center"/>
                        TrashTrack
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav justify-content-end">

                            <li className="nav-item">
                                <Link className="nav-link" to="/AddUser">
                                    Registrar
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/Users">
                                    Ver
                                </Link>

                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/Events">
                                    Eventos
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
