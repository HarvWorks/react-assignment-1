import React from 'react';

const userInput = (props) => {
    const style = {
        backgroundColor: "white",
        font: "inherit",
        border: "1px solid black",
        padding: "8px",
        marginTop: "30px",
        fontSize: "14px"
    }
    return (
        <div>
            <input  style={style} type="text" onChange={props.changed}  value={props.name}/>
        </div>
    );
}

export default userInput