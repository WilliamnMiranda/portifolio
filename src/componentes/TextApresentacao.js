import React from 'react'
import style from './../css/apresentacao.module.css'
const TextApresentacao = () => {
    return (
        <article className = {style.textApresentacao}>
           <h1  className = {style.tittleApresentacao}>Um pouco sobre mim</h1>
           <span className = {style.descricaoApresentacao}>Me chamo William , tenho 22 anos , e desde pequeno tenho uma paixao por tecnologia,
            comecei a programar ainda bem cedo em servidores de GTA Online (samp),além da paixao por tecnologia tambem sou apaixonado por esportes e animais .
            <span>
                Sou formado em analise e desenvolvimento de sistemas pela Estácio de Sá e atualmente na funcao de Desenvolvedor Web e aluno em Gestao de TI .
            </span>
           </span>
        </article>
    )
}

export default TextApresentacao
