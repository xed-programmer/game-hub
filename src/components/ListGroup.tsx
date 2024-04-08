import { useState } from "react";

function ListGroup() {
    let items = [
        'Caloocan', 'Malabon', 'Navotas'
    ];

    const [selectedItem, setSelectedItem] =  useState(-1);

    return (
        <>
            <h1>List</h1>
            {items.length === 0 && <p>No item found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li key={item} className={selectedItem === index ? "list-group-item active" : "list-group-item"}
                    onClick={()=>setSelectedItem(index)}>{item}</li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;