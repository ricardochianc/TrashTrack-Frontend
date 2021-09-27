import axios from 'axios';
import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = '662075016994-6s1q1h5obuk5l3itf6h7p32qh1t3bnfd.apps.googleusercontent.com';

export default class GLogin extends Component {

    onSuccess = async (res) => {
        const tokenId = res.tokenId;

        try {
            const resp = await axios.post('https://backend-dot-trash-track-demo.ue.r.appspot.com/login/verify', {
                tokenId
            });

            if (resp.status === 200 && resp.data.found) {
                window.location.href = '/AddUser';
            }
            else {
                alert(`No se ha registrado un usuario con el correo ${resp.data.email}`);
            }
        } catch (error) {
            alert('Ha ocurrido un error al autenticar usuario');
            console.error(error);
        }
    }

    onFailure = (res) => {
        console.log('Failed', res);
    }

    render() {
        return (
            <div className=".col-md- gy-2">
                <GoogleLogin
                    clientId={clientId}
                    buttonText='Login'
                    onSuccess={this.onSuccess}
                    onFailure={this.onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
            </div>
        )
    }
}
