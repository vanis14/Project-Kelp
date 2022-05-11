import { React, useState } from 'react'
import { retrieveItem, deleteItem } from "../items/actions";

function List(props) {
    return (
        <ul>
            {data.map((item) => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
    )
}

export default List