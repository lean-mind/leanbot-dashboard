import React, { useState } from "react"
import { LoginForm } from "../index"
import { GoogleLoginResponse, GoogleLoginResponseOffline } from "react-google-login"
import { verifySignUpTokens } from "../../domain/services/auth"
import { Redirect } from "react-router"


export const SignUp: React.FC<{}> = () => {

  const params = new URLSearchParams(window.location.search)

  const [idToken] = useState(() => params.get("id") ?? "")
  const [redirect, setRedirect] = useState<boolean>(false)

  const successGoogleResponse = async (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    if (!response.code) {
      const googleToken = (response as GoogleLoginResponse).getAuthResponse().id_token
      await verifySignUpTokens(googleToken, idToken).then((response) => {
        if (response.status === 200) {
          setRedirect(true)
        }
      })
    } else {
      console.log('chacho, petó esto');
    }
  }

  return (
    <div className="SignUp">
      <h1>SignUp</h1>
      { redirect ?
        <Redirect to='/dashboard' />
        :idToken ?
          <LoginForm successGoogleResponse={ successGoogleResponse }/>
          : <div>No puedes pasar 🧙‍</div>
      }
    </div>
  )
}