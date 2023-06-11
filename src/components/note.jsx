import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props){
    return <div className = "note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick = {() => {
            //Since we need to call the delNote in parent element with a parameter, we need to use a callback function
            props.delNote(props.id)
        }}><DeleteIcon /></button>
    </div>
}

export default Note;