// importando um componente para a app

import { ExperienceBar } from './components/ExperienceBar';
import './styles/global.css';

function App() {
  return (
    <div className="container">
      <ExperienceBar />
    </div>
  );
}

export default App;

// 'Botão1' é children de Button (propriedade: children)

// em react, os arquivos '.css' tem que ser importados para um arquivo javascript e não para html