import React from "react";

const Car = (props) => (
    <div style={{
        border: '1px solid #ccc',
        marginBottom: '10px',
        display: 'inline-block',
        padding: '10px',
        margin: '10px'
    }}>
        <h3>Car name: {props.name}</h3>
        <p>Year: {props.year}</p>
        {/* {props.children} */}
        <input type="text" onChange={props.onChangeName} value={props.name} />
        {/* <button onClick={props.onChangeTitle}>Click</button> */}
        <button onClick={props.onDelete}>Delete</button>
    </div>
)

export default Car;