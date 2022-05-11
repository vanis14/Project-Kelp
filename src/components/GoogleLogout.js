import React from "react";
import GoogleLogout from 'react-google-login';

const clientId = '827374248152-cmv02cldgkosknrvom5f18m31ef8ovbs.apps.googleusercontent.com';

function GLogout(){
    const onSuccess =() =>{
        alert('Logout made successfully');
    };

    return(
        <div>
            <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={onSuccess}
            ></GoogleLogout>
        </div>
    );
} 

export default GLogout;