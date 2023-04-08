import { googleLogout } from '@react-oauth/google'
import React from 'react'

import { GoogleLogout, useGoogleLogout } from 'react-google-login'

let clientId =
  '1064848985718-s6283cvk4akh63kujfqueau630l97bkd.apps.googleusercontent.com'

const GoogleLogoutButton = ({ setUserInfo }) => {


  const onSuccess = () => {
    console.log('deslogueado')
    setUserInfo("")
  }

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
         autoLoad="true"
      />
    </div>
  )
}

export default GoogleLogoutButton
