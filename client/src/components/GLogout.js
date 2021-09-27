import React, { Component } from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = '662075016994-6s1q1h5obuk5l3itf6h7p32qh1t3bnfd.apps.googleusercontent.com';

export default class GLogout extends Component {

    onSuccess = () => {
        alert('Logout made successfully');
    }

    render() {
        return (
            <div>
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Logout"
                    onLogoutSuccess={this.onSuccess}
                />                
            </div>
        )
    }
}
