import React from 'react';

const userOutput = (props) => {
    return (
        <div className="output">
            <p>Hi {props.name}!</p>
            <p>It is cold here!</p>
        </div>
    );
}

export default userOutput