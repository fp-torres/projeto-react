import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';   
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
 const nome = "Maria";
  return (
    <div className="App">
      
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
