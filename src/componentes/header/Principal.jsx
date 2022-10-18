import React from 'react'
import './Principal.css'

const Principal = () => {
  return (
    <div className='container__Principal'>

      <div className='container__img'>
        <img className='photoPrefile' src="./public/profile.svg" alt="" />
      </div>

      <div className='container__text'>
        <p className='text_presentacion'>Hola, me llamo Douglas Castillo   <i class="fa-solid fa-thumbs-up"></i>  la programación.
          Conocí este mundo en el año 2008 y estudié ingeniería informática en el año
          2013 me gradúe, aun así no ejercí la carrera. En el 2022 tomé la  decisión de volver
          a este mundo, así que cada día me preparo para lograr ejercer como programador.

        </p>
      </div>

    </div>
  )
}

export default Principal
