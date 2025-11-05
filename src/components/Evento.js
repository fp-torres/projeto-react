function Evento({numero}) {
    
    function meuEvento() {
      console.log(`Ativou o evento! ${numero}`);
    }  

    return (
   <div>
     <h1>Evento de clique</h1>
     <button onClick={meuEvento} >Clique aqui {numero}</button>
    </div>   
     
 );
  }
    export default Evento;