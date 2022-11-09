import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';



function App() {
  return (
    <div className="App">
      <h1>Testando CSS</h1>
     <SayMyName name='Mateus'/> 
     <SayMyName name='Raquel'/> 
     <Frase />
     <Pessoa 
      nome='Helena'
      idade="10"
      endereco="13690 100 Ave, Surrey, BC"
      profissao="Bagunceira"
      />
      <List />


    </div>
  );
}

export default App;
