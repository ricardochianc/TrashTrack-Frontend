import React, { Component } from 'react';
import Navigation from './Navigation';
import axios from 'axios';

export default class Events extends Component {

    state = {
        events: []
    }

    async componentDidMount() {
        const res = await axios.get('https://backend-dot-trash-track-demo.ue.r.appspot.com/pubsub/getEvents');

        if (res.status === 200) {
            console.log(res);
            this.setState({ events: res.data });
        }
    }

    render() {
        return (
            <div>
                <Navigation />
                <div class="container-md">
                    <br />

                    <h2>Eventos</h2>

                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Descripcion</th>
                                <th scope="col">Hora</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.events.map(event =>
                                    <tr key={event.id}>
                                        <td>{event.description}</td>
                                        <td>{event.time}</td>
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
