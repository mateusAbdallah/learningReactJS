import Item from './Item'

function List() {
    return(
        <>
        <h1>Minha lista</h1>
        <ul>
            <Item marca= "Porsche 911"/>
            <Item marca= "Uno Fiat"/>
            <Item marca="Chevrolet Trax" ano_lancamento={2020}/>
        </ul>
        </>
    )
}

export default List