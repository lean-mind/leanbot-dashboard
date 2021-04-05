import React from "react";
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';

interface LoginProps {
  changeAuth: (value: boolean) => void
}

export const LoginForm: React.FC<LoginProps> = ({ changeAuth }) => {

  const successGoogleResponse = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    if(!response.code){
      console.log('De locos ', response);
      console.log('token a validar: ', (response as GoogleLoginResponse).getAuthResponse().id_token)
      changeAuth(true)
    } else {
      console.log('chacho, petó esto');
    }
  }

  const failureGoogleResponse = (response:any) => {
    console.log(response);
  }

  return (  
    <div>
        <GoogleLogin
              clientId={ process.env.REACT_APP_CLIENT_ID || '' }
              buttonText="Login"
              onSuccess={successGoogleResponse}
              onFailure={failureGoogleResponse}
              cookiePolicy={'single_host_origin'}
            /> 
    </div>
  );
}