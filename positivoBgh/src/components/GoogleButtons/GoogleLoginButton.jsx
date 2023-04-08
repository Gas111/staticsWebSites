import { gapi } from 'gapi-script'
import React from 'react'

import { GoogleLogin } from 'react-google-login'
import { useNavigate } from 'react-router'

let clientId =
  '1064848985718-up29u3ugkgo3fki4nso39m3h1r6th9qv.apps.googleusercontent.com'

const GoogleLoginButton = ({ setUserInfo }) => {
  const navigate = useNavigate()
  const onSuccess = (res) => {
    setUserInfo(res.profileObj)
    localStorage.setItem('token', res.tokenId)
    navigate('/search')
  }
  const onFailure = (res) => {
    console.log(res, 'no logueado')
    setUserInfo('')
    localStorage.removeItem('token')
    gapi.auth.setToken(null)
    gapi.auth.signOut()
  }

  return (
    <div className="flex justify-center mt-[1rem] bt-1-solid ">
      <GoogleLogin
        className="flex w-full justify-evenly"
        clientId={clientId}
        buttonText="Sign in with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn="true"
        // redirectUri={'https://localhost:5173/search'}
      />
    </div>
  )
}

export default GoogleLoginButton
