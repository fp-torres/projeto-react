import Button from "./evento/Button";

function Evento() {
    
    function meuEvento() {
      console.log(`Ativando primeiro evento! `);
    }  

    function segundoEvento() {
      console.log(`Ativando segundo evento! `);
    }

    return (
   <div>
     <h1>Evento de clique</h1>
     <Button event={meuEvento} text="Primeiro Evento" />
    <Button event={segundoEvento} text="Segundo Evento" />
    </div>   
     
 );
  }
    export default Evento;