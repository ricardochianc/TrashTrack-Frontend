import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/eco-energy.png';
import GLogin from './GLogin';

export default class Login extends Component {

    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt="TraskTrack Logo" width="50" height="50" className="d-inline-block align-text-center" />
                            TrashTrack
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav justify-content-end">

                                <li className="nav-item">
                                    <Link className="nav-link">
                                        Acerca de nosotros
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link">
                                        Noticias
                                    </Link>

                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="container-sm">

                    <form className="row">

                        <div className="row gy-5">
                            <h3>Bienvenido</h3>
                        </div>
                        <div className="row gy-2">
                            <div className="col-md-3">
                                <label for="inputEmail4" className="form-label">Correo</label>
                                <input type="email" className="form-control" id="inputEmail4" />
                            </div>
                        </div>
                        <div className="row gy-2">
                            <div class="col-md-3">
                                <label for="inputPassword4" class="form-label">Contraseña</label>
                                <input type="password" class="form-control" id="inputPassword4" />
                            </div>
                        </div>
                        <div className="row row gy-2">
                            <div class="col-12">
                                <button type="button" class="btn btn-primary">Ingresar</button>
                            </div>
                        </div>
                        <GLogin/>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}
