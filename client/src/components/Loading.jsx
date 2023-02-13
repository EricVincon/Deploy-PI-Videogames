import React from 'react'
import loading from '../imagenes/carga.gif'
import s from '../styles/Loading.module.css'

export default function PaginaDeCarga() {
    return (
          <div className={s.box_loading}>
            <img src={loading} alt="" />
          </div>
    )}