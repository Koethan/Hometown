


function ListGroup(){

    let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"]
    // items = []

    const message = items.length === 0 ? <p>No Items Found</p> : null

    
    return (
    <>
        <h1>List</h1>
        { message }
        <ul className="list-group">
        {items.map((item) => <li key={item}className="list-group-item">{item}</li>)}
        </ul>
    </>
    )
}

export default ListGroup