import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getDataLogin } from '../store/slices/login.slice'

import { useGoogleLogin } from '@react-oauth/google'

const LoginSection = () => {
  const navigate = useNavigate()
  const userInfo = useSelector((state) => state.login)
  const [isUserDataReady, setIsUserDataReady] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    // if (isUserDataReady) {
    //   const access_token = localStorage.getItem('accessToken')
    //   if (access_token) dispatch(getDataLogin(access_token))
    // }
  }, [])

  const loginToGoogle = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      localStorage.setItem('loginWith', 'Google')
      localStorage.setItem('accessToken', tokenResponse.access_token)
      console.log('login Ok')
      setIsUserDataReady(true)
      dispatch(getDataLogin(tokenResponse.access_token))
      console.log(userInfo)
      navigate('/search')
    },
    onError: () => {
      console.log('login failed')
    },
  })




  

  return (
    <div className="text-left flex justify-center ai-center pl-[1rem]  pr-[1rem] pt-[1rem] bg-gradient-to-r from-slate-100 to-purple-400 w-full h-screen">
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              // for="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              // for="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
            <p className="text-red-500 text-xs italic">
              Please choose a password.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
          <div className="m-[0.5rem] border-b-2 ">
            {isUserDataReady ? (
              <p>{userInfo}</p>
            ) : (
              <button onClick={() => loginToGoogle()}>CLICK ACA</button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginSection
