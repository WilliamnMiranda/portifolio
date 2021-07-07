import React from 'react'
import style from './../css/projetos.module.css'
const Projeto = ({url,link}) => {

    return (
        <div  className = {style.projeto}>
            <div className = {style.imgProjeto}>
                <img src = {url}/>
            </div>

            <div className ={style.divBtnVisitar}>
                <a  href = {link}>
                    <button className = {style.btnVisitar}>visitar</button>
                </a>  
            </div>
        </div>
    )
}

export default Projeto
