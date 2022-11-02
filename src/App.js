import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';



function App() {
  return (
    <div className="App">
     <SayMyName name='Mateus'/> 
     <SayMyName name='Raquel'/> 
     <Pessoa 
      nome='Helena'
      idade="10"
      endereco="13690 100 Ave, Surrey, BC"
      profissao="Bagunceira"
      />


    </div>
  );
}

export default App;
