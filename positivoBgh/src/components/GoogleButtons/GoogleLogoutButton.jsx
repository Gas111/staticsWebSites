import { googleLogout } from '@react-oauth/google'
import { gapi } from 'gapi-script'
import React from 'react'

import { GoogleLogout, useGoogleLogout } from 'react-google-login'

let clientId =
  '1064848985718-up29u3ugkgo3fki4nso39m3h1r6th9qv.apps.googleusercontent.com'

const GoogleLogoutButton = ({ setUserInfo }) => {
  const onLogoutSuccess = async (res) => {
    console.log('deslogueado', res)
    setUserInfo('')
   
    gapi.auth.setToken(null)
    await gapi.auth.signOut()
    window.localStorage.removeItem('token')
    window.localStorage.clear()
    window.sessionStorage.clear()

  }

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onLogoutSuccess}
        autoLoad="true"
      />
    </div>
  )
}

export default GoogleLogoutButton
