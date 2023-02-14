import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import s from "../styles/navBar.module.css"
import imagen from '../imagenes/play.gif'
import { getAllVideogames } from "../redux/actions";
import { useDispatch } from "react-redux";

export default function NavBar() {

    const dispatch = useDispatch()

    const handleRefresh = (e) => {
        e.preventDefault()
        dispatch(getAllVideogames())
    }

    return (
        
            <nav className={s.nav}>
                <div className={s.busqueda}>
                    <SearchBar />
                </div>
                <div className={s.imagencita}>
                    <img src={imagen} alt="play.gif" className={s.gif}/>
                </div>
                <div className={s.search}>
                    <button className={s.btn}onClick={e => handleRefresh(e)}>Reset</button>
                    <span className={s.opcion}><NavLink to={'/create'} className={s.to}> Crear videojuego</NavLink></span>
                </div>
            </nav>
       
    )
}