import React from 'react'
import style from './../css/Skills.module.css'
const Skill = ({nome , skill}) => {
    return (
          <article className= {style.itemSkill}>
            <div className = {style.containerNameSkill}>{nome}</div>
            <div className = {style.containerProgress}>
              <div className = {style.progress}style={{width:skill + "%"}}>
                  <span className = {style.infoSkill}>{skill}%</span>
              </div>
            </div>
          </article>
    )
}

export default Skill
