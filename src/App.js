import './App.css';
import Frase from './components/Frase';
import HelloWorld from './components/HelloWorld';

function App() {

  function name(first, last){
    return first + last
  }
  
  function age(){
    let age = 31;
    return age;
  }

  function job(){
    return "I'm a Front End Developer with abilities in JavaScript, HTML and CSS"
  }
  


  return (
    <div className="App">
      <h1>Hello React</h1>
      <p>My first application with React</p>
      <p>Olá, meu nome é {name("Mateus", " Abdallah")}</p>    
      <p>Idade: {age()} </p> 
      <p>Work Position: {job()}</p> 
      <Frase/>
      <HelloWorld/>
      <Frase/>
    </div>
  );
}

export default App;
