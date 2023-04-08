import React, { useEffect } from 'react'
import { GoogleLogin } from 'react-google-login'
import { gapi } from 'gapi-script'
import GoogleLoginButton from './GoogleButtons/GoogleLoginButton'
import GoogleLogoutButton from './GoogleButtons/GoogleLogoutButton'

var clientId =
  '1064848985718-s6283cvk4akh63kujfqueau630l97bkd.apps.googleusercontent.com'

const LoginSection = ({ setUserInfo }) => {
  useEffect(() => {
    function start() {
      gapi.client.init({ client_id: clientId, scope: '' })
    }

    gapi.load('client:auth2', start)
  }, [])

  //   const accessToken = gapi.auth?.getToken().access_token

  return (
    <div className="text-left flex justify-center ai-center pl-[1rem]  pr-[1rem] pt-[1rem] bg-gradient-to-r from-slate-100 to-purple-400 w-full h-screen">
      <div class="w-full max-w-xs">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Username
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
            <p class="text-red-500 text-xs italic">Please choose a password.</p>
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
            <a
              class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
          <div className="m-[0.5rem] border-b-2 "></div>
          <GoogleLoginButton setUserInfo={setUserInfo} />
        </form>
      </div>
    </div>
  )
}

export default LoginSection
