import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';   
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

function App() {
 const nome = "Maria";
  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase />
      <Frase />
            <HelloWorld />
            <SayMyName nome="Felipe" />
            <Pessoa />
            <Pessoa nome="João" idade="25" profissao="Desenvolvedor" foto="https://via.placeholder.com/150" />
            <Pessoa nome="Ana" idade="30" profissao="Designer" foto="https://via.placeholder.com/150" />
            <Pessoa nome="Carlos" idade="28" profissao="Analista" foto="https://via.placeholder.com/150" />
    </div>
  );
}

export default App;
