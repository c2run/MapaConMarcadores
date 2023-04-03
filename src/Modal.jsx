import React from 'react'
import nft from './imagenes/pokemon.jpg';

const Modal = ({open, onClose}) => {
    if(!open) return null
  return (
    <div onClick={onClose} className='overlay'>
   <div className='modalContainer'>
    <img src={nft} alt='' width="200" height="100"/>
    <div className='modalRight'>
    <button onClick={onClose} className='closeBtn'>Cerrar</button>
    <div className='content'>
         <h1>Plaza 3</h1>
       <p> Información sobre la plaza</p>
    </div>
   </div>
   </div>
   </div>
  )
}

export default Modal