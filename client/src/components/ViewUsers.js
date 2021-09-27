import React, { Component } from 'react';
import Navigation from './Navigation';
import axios from 'axios';

export default class ViewUsers extends Component {

    state = {
        users: []
    }

    async componentDidMount() {
        const res = await axios.get('https://backend-dot-trash-track-demo.ue.r.appspot.com/users');

        if (res.status === 200) {
            console.log(res);
            this.setState({ users: res.data });
        }
    }

    render() {
        return (
            <div>
                <Navigation />
                <div className="container-md">
                    <br />

                    <h2>Usuarios Registrados</h2>

                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellido</th>
                                <th scope="col">Correo</th>
                                <th scope="col">Dirección</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map(user =>
                                    <tr key={user.id}>
                                        <td>{user.FirstName}</td>
                                        <td>{user.LastName}</td>
                                        <td>{user.Email}</td>
                                        <td>{user.Address}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
