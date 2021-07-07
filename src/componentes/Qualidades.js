import React from 'react'
import Qualidade from './../componentes/Qualidade.js'
import { BiCodeAlt } from "react-icons/bi";
import { BiLineChart } from "react-icons/bi";
import { BiLayout } from "react-icons/bi";
import style from './../css/qualidade.module.css'

let qualidades = [
    {
        nome:"Boas Praticas",
        descricao:"Utilizando as melhores praticas e tecnologias garantindo a qualidade e a facil manutencao",
        Icon:<BiCodeAlt/>,
    },
    {
        nome:"SEO",
        descricao:"Seu site sempre no topo das pesquisas.",
        Icon:<BiLineChart/>,
    },
    {
        nome:"Responsividade",
        descricao:"Seu produto se adapta a qualquer tipo de dispositivo , garantindo o seu melhor uso.",
        Icon:<BiLayout/>,
    },
]
const Qualidades = () => {
    return (
     
        <section className = {style.containerQualidades}>
           <h1 className = {style.tittleQualidades}>Qualidades</h1>
            <section className = {style.containerQualidade}>
                {
                    qualidades.map((item) => {
                    return <Qualidade key = {item} {...item}/>
                    })
                }
            </section>
        </section>
    )
}

export default Qualidades
