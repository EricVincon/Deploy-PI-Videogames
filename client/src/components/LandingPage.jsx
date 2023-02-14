import React from "react";
import { Link } from 'react-router-dom'
import s from '../styles/LandingPage.module.css'
import linkedin from '../imagenes/link.jpg'
import github from '../imagenes/github (1).png'
import gmail from '../imagenes/logo-1162901_1920.png'

const LandingPage = () => {
    return (
        <div className={s.full}>
            <div className={s.full_inner}>
                <div className={s.content}>
                    <h1 className={s.titulo}>Videogames APP</h1>
                    <Link to='/home'>
                        <button className={s.btn}>
                            <span className={s.ingresar}>COMENCEMOS!</span>
                        </button>
                    </Link>
                </div>
                {/* "target='_blank' rel='noreferrer'" se usa para abrir un enlace en una nueva ventana y evitar que el sitio web de destino recopile información del sitio web actual. */}
                <div className={s.links}>
                    <div className={s.mini_box}>
                        <a href='https://www.linkedin.com/in/eric-vincon-1549521bb/' target="_blank" rel="noreferrer">
                            <img src={linkedin} alt='linkedin' />
                        </a>
                    </div>
                    <div className={s.mini_box}>
                        <a href='https://github.com/EricVincon' target="_blank" rel="noreferrer">
                            <img src={github} alt='github' />
                        </a>
                    </div>
                    <div className={s.mini_box}>
                        <a href='mailto:vinconeric20@gmail.com' target="_blank" rel="noreferrer">
                            <img src={gmail} alt='gmail' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default LandingPage