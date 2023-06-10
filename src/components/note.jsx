import React from 'react';

function Note(props){
    return <div className = "note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick = {() => {
            //Since we need to call the delNote in parent element with a parameter, we need to use a callback function
            props.delNote(props.id)
        }}>DELETE</button>
    </div>
}

export default Note;