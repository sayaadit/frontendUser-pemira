import React from 'react'
import ThanksImage from '../assets/thanks.png'
import Header from '../component/header/Header'
function Thanks() {
  return (
    <div>
      <Header />
      <img
        src={ThanksImage}
        alt='terimakasih'
        style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}}
      />
    </div>
  )
}

export default Thanks
