import React from "react";

const Car = (props) => (
    <div>
        <h3>Car name: {props.name}</h3>
        <p>Year: {props.year}</p>
        {/* {props.children} */}
        <button onClick={props.onChangeTitle}>Click</button>
    </div>
)

export default Car;