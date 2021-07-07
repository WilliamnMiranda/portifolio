import React from 'react'
import style from './../css/qualidade.module.css'
const Qualidade = ({nome,descricao,Icon}) => {
    return (
       <section className = {style.qualidade}>
           
           <div className = {style.nomeQualidade}>
               {nome}
           </div>

            <div className = {style.icone}>
                {Icon}
            </div>

            <div className = {style.descricaoQualidade}>
                {descricao}
            </div>
       </section>
    )
}

export default Qualidade
