import React from 'react'
import Foto from './FotoApresentacao.js'
import Texto from './TextApresentacao.js'
import style from './../css/apresentacao.module.css'

const Apresentacao = () => {
    return (
        <section className = {style.apresentacao}>
            <article className = {style.sobre}>
                <Foto/>
                <Texto/>
            </article>
        </section>
    )
}

export default Apresentacao
