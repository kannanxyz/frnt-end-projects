import React from 'react'
import './QR.css'

const QR = () => { 

  return (
    <>
      <div className="app-container">
        <h1>QR CODE GENERTATOR</h1>
        <img className='qr-image' src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" alt="" />
        <div>
        <label htmlFor="dataInput" className='input-label'>
            Data for QR code:
        </label>
        <input type="text" name="" id="data-input" placeholder='Enter data for code' />

        <label htmlFor="dataInput" className='input-label'>
            Image size (e.g., 150)
        </label>
        <input type="text" name="" id="data-input" placeholder='Enter image size'/>
        <button onClick={()=> alert("hi")} className='gen-button'>Genarte code</button>
        <button className='down-button'>Download code</button>
        </div>
        <p className='footer'>Design by <span>Kannanxyz</span></p>
      </div>
      
      
    </>
  )
}

export default QR
