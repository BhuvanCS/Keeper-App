import React from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateNote(props) {
    const [note, setNote] =  React.useState({
        title: "",
        content: ""
    })
    const [expand, setExpand] = React.useState(false);
    function updateNote(event){
        setNote((prev) => {
            //prev holds the previous value of note
            return {
                ...prev,
                // ... is spread operator which explands in place the value of prev
                [event.target.name]: event.target.value
                //Using variables as keys requires using it around the [] operator
                //We overwrite the Title/Content property based on which element called this function [event.target.name]
            }
        })
    }
    function expandInputArea() {
      setExpand(true);
    }
    
  return (
    <div>
      <form onClick = {expandInputArea} className = "create-note" onSubmit = {(event) => {
        setExpand(false);
        event.preventDefault();
      }}>
        {expand && <input onChange = {updateNote} name="title" placeholder="Title" value = {note.title}/>}
        <textarea onChange = {updateNote} name="content" placeholder="Take a note..." rows= {expand? "3" : "1"} value = {note.content}/>
        
          <Zoom in = {expand}>
            <Fab type = "submit" onClick = {()=> {
                props.addNote(note)
                setNote({title: "", content: ""})
              }} >
              <AddIcon />
            </Fab>
          </Zoom>
        
      </form>
    </div>
  );
}

export default CreateNote;
