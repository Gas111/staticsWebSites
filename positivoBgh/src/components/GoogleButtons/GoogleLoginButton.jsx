import React from 'react'

import { GoogleLogin } from 'react-google-login'

let clientId =
  '1064848985718-s6283cvk4akh63kujfqueau630l97bkd.apps.googleusercontent.com'

const GoogleLoginButton = ({ setUserInfo }) => {
  const onSuccess = (res) => {
    setUserInfo(res.profileObj)
  }
  const onFailure = (res) => {
    console.log(res, 'no logueado')
    setUserInfo('')
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
        autoSelect="true"
      />
    </div>
  )
}

export default GoogleLoginButton
