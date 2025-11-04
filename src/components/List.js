import Item from './Item';

function List() {
  return (
    <>
      <h1>Lista de Tarefas</h1>
      <ul>
        <Item marca="Ferrari" ano_lancamento={2003} />
        <Item marca="Renault" ano_lancamento={1985} />
        <Item marca="Fiat" ano_lancamento={2009}  />
    
    
      </ul>
    </>
  );
}
export default List;