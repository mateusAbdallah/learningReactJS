import './App.css';

function App() {

  function name(first, last){
    return first + last
  }
  
  function sum(a, b){
    return a + b
  }
  


  return (
    <div className="App">
      <h1>Hello React</h1>
      <p>My first application with React</p>
      <p>Olá, {name("Mateus", "Abdallah")}</p>    
      <p>Soma: {sum(22, 15)} </p>  
    </div>
  );
}

export default App;
