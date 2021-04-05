import React, { useState } from "react";
import { GoogleLogout } from "react-google-login";
import { DashboardContainer, SideNavBar } from "../../components";
import { LoginForm } from "../LoginForm/LoginForm";
import "./Dashboard.scss"


export const Dashboard: React.FC<{}> = () => {
  const [isAuth, changeAuth] = useState(false)
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
          :<LoginForm changeAuth={ changeAuth }/>
      }
    </div>
  );
}
