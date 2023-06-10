import React from "react";

function CreateNote(props) {
    const [note, setNote] =  React.useState({
        title: "",
        content: ""
    })

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
    
  return (
    <div>
      <form onSubmit = {(event)=> {
        props.addNote(note)
        setNote({title: "", content: ""})
        event.preventDefault();
        //default behavior of form refreshes the webpage on every submit, so we prevent that
      }}>
        <input onChange = {updateNote} name="title" placeholder="Title" value = {note.title}/>
        <textarea onChange = {updateNote} name="content" placeholder="Take a note..." rows="3" value = {note.content}/>
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateNote;
