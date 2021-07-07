import React from 'react'
import Apresentacao from './componentes/Apresentacao.js'
import Skills from './componentes/Skills.js'
import Qualidade from './componentes/Qualidade.js'
import Projetos from './componentes/Projetos.js'
function App() {
  return (
    <main>
      <Apresentacao/>
      <Skills/>
      <Projetos/>
      <Qualidade/>
    </main>
  );
}

export default App;
