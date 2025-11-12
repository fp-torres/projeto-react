function SeuNome({ setNome }) {
  return (
    
    <div>
      <h2>Digite o seu nome: </h2>
      <input type="text" placeholder= "Qual é o seu nome? " 
      onChange={(e) => setNome(e.target.value)}/>
      
    </div>
  );
}

export default SeuNome;