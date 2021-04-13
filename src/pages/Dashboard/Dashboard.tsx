import React, { useState } from "react";
import { GoogleLoginResponse, GoogleLoginResponseOffline, GoogleLogout } from "react-google-login"
import { DashboardContainer, SideNavBar } from "../../components";
import { LoginForm } from "../LoginForm/LoginForm";
import "./Dashboard.scss"
import { verifyAuthToken } from "../../domain/services/auth"


export const Dashboard: React.FC<{}> = () => {
  const [isAuth, changeAuth] = useState(false)

  const successGoogleResponse = async (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    if (!response.code) {
      const token = (response as GoogleLoginResponse).getAuthResponse().id_token
      console.log(response)
      await verifyAuthToken(token).then(() => changeAuth(true))
    } else {
      console.log('chacho, petó esto');
    }
  }

  return (
    <div>
      { isAuth ? 
          <div className="Dashboard">
            <SideNavBar/>
            <DashboardContainer/>
            <GoogleLogout
              clientId={process.env.REACT_APP_CLIENT_ID || ''}
              buttonText="Logout"
              onLogoutSuccess={() => { changeAuth(false) }}
            />
          </div>
          :<LoginForm successGoogleResponse={ successGoogleResponse }/>
      }
    </div>
  );
}
