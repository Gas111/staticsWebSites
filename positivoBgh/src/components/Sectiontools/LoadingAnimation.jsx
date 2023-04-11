import React from 'react'
import './styles/loadingAnimation.css'

const LoadingAnimation = () => {
  return (
    <div className="overlay w-auto h-auto flex">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default LoadingAnimation
