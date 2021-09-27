import React, { Component } from 'react';
import Navigation from './Navigation';
import axios from 'axios';

export default class CreateUser extends Component {

    crearUsuario = async e => {
        e.preventDefault();

        try {
            const res = await axios.post('https://backend-dot-trash-track-demo.ue.r.appspot.com/users/create', {
                FirstName: document.getElementById('firstName').value,
                LastName: document.getElementById('LastName').value,
                Email: document.getElementById('Email').value,
                Address: document.getElementById('address').value
            });

            if (res.status === 200) {
                alert('Se ha creado el usuario');
                document.getElementById('createForm').reset();
            }
        } catch (error) {
            console.log(error.response);

            if (typeof (error.response.data.error.keyValue.Email) != 'undefined') {
                alert(`Ya existe un usuario registrado con el correo ${error.response.data.error.keyValue.Email}`);
                document.getElementById('Email').value = '';
            }
            else {
                alert('Ha ocurrido un error al registrar el usuario');
            }
        }
    }

    render() {
        return (
            <div>
                <Navigation />
                <div class="container-md">
                    <br />

                    <h2>Registrar Empleado</h2>

                    <form id="createForm" onSubmit={this.crearUsuario}>
                        <div class="mb-3 row">
                            <label for="firstName" class="col-sm-1 col-form-label">Nombre:</label>
                            <div class="col-sm-3">
                                <input type="text" class="form-control" id="firstName" required />
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="LastName" class="col-sm-1 col-form-label">Apellido:</label>
                            <div class="col-sm-3">
                                <input type="text" class="form-control" id="LastName" required />
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="Email" class="col-sm-1 col-form-label">Correo:</label>
                            <div class="col-sm-3">
                                <input type="email" class="form-control" id="Email" required />
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="Address" class="col-sm-1 col-form-label">Dirección:</label>
                            <div class="col-sm-3">
                                <input type="address" class="form-control" id="address" required />
                            </div>
                        </div>
                        <button type="submit" class="btn btn-outline-success">Crear</button>
                    </form>
                </div>
            </div>
        )
    }
}
