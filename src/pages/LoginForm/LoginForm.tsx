import React from "react"
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from "react-google-login"

interface LoginProps {
  successGoogleResponse: (response: GoogleLoginResponse | GoogleLoginResponseOffline) => void
}

export const LoginForm: React.FC<LoginProps> = ({ successGoogleResponse }) => {

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
              cookiePolicy={'single_host_origin'}
            /> 
    </div>
  );
}