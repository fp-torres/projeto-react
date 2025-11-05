function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault();
        console.log('Usuário cadastrado!');
    } 

  return (
    <div>
      <h1>Meu cadastro:</h1>
      <form onSubmit={cadastrarUsuario}>
       <div>
        <h1>Nome:</h1>
        <input type="text"  placeholder="Digite seu nome" />
       </div>
       <div>
        <input type="submit" value="Cadastrar" /> 
         </div>
        </form>
    </div>
  )
}   

export default Form;