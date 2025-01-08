
function ListGroup() {
    let items = [
        'Nisharg',
        'Kkavy',
        'Minku',
        'Ayush',
        'Jeetu',
        'Mannu']

    items = [];
    // if(items.length === 0) {
    //     return (<>
    //     <h1>List Group</h1>
    //     <h6>No Items found LOL !!!</h6>
    //     </>)
    // }
    const message = items.length === 0 ? <p>No Items Found</p> : null
    return (
        <>
        <h1>Homies</h1>
        {/* <ul className="list-group">
            <li className="list-group-item">Item 1</li>
            <li className="list-group-item">Item 2</li>
            <li className="list-group-item">Item 3</li>
            <li className="list-group-item">Item 4</li>
            <li className="list-group-item">Item 5</li>
        </ul> */}
        {message}
        <ul className="list-group">
            {items.map((item) => (
                <li className="list-group-item" key={item}>{item}</li>
            ))}
        </ul>
        </>
    )
}

export default ListGroup