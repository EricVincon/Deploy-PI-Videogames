import React from 'react'
import i from '../imagenes/404-error-3060993_1280.png'
import s from '../styles/Error.module.css'

export default function Error () {

    return (
        <div className={s.kirby}>
            <h1>No se encontraron videojuegos</h1>
            <img src={i} alt='kirby' />
        </div>
    )
}