function Saudacao({ nome }) {

function gerarSaudacao(algumNome)   {
    return `Olá, ${algumNome}! Seja bem-vindo(a)!`;
    }

  return (
    <div>
      <p>{gerarSaudacao(nome)}</p>
    </div>
  );
}
export default Saudacao;