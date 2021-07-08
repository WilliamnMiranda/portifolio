import React from 'react'
import Apresentacao from './componentes/Apresentacao.js'
import Skills from './componentes/Skills.js'
import Qualidades from './componentes/Qualidades.js'
import Projetos from './componentes/Projetos.js'
import Sociais from './componentes/Sociais.js'
function App() {
  return (
    <main>
      <Apresentacao/>
      <Skills/>
      <Projetos/>
      <Qualidades/>
      <Sociais/>
    </main>
  );
}

export default App;
