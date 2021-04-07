import React from "react";
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import { verifyAuthToken } from "../../domain/services/auth"

interface LoginProps {
  changeAuth: (value: boolean) => void
}

export const LoginForm: React.FC<LoginProps> = ({ changeAuth }) => {

  const successGoogleResponse = async (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    if (!response.code) {
      const token = (response as GoogleLoginResponse).getAuthResponse().id_token
      console.log(response)
      await verifyAuthToken(token).then(() => changeAuth(true))
    } else {
      console.log('chacho, petó esto');
    }
  }

  const failureGoogleResponse = (response:any) => {
    console.log(`Google login failed ${response}`);
  }

  return (  
    <div>
        <GoogleLogin
              clientId={ process.env.REACT_APP_CLIENT_ID || '' }
              buttonText="Login"
              onSuccess={successGoogleResponse}
              onFailure={failureGoogleResponse}
              isSignedIn={true}
              cookiePolicy={'single_host_origin'}
            /> 
    </div>
  );
}