import Item from './Item';

function List() {
  return (
    <>
      <h1>Lista de Tarefas</h1>
      <ul>
        <Item marca="Nike" />
        <Item marca="Adidas" />
        <Item marca="Puma" />
        <Item marca="Reebok" />
    
      </ul>
    </>
  );
}
export default List;