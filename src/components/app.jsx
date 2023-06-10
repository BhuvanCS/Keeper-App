import React from 'react';
import Header from './Header'
import CreateNote from './CreateNote';
import Note from './Note';
import Footer from './Footer';

function App(){
    const [notes, setNotes] = React.useState([]);
    function addNote(note){
        setNotes([...notes, note]);
        console.log(notes);
    }
    function delNote(id){
        setNotes(() => {
            return notes.filter((note, index) => {
                //only add the notes whose ID doesnt match the the ID which called the function
                return index !== id;
            })
        })
    }
    return <div>
        <Header />
        <CreateNote addNote = {addNote}/>
        {console.log(notes)}
        {notes.map((note, index) => <Note key = {index} id = {index} title = {note.title} content = {note.content} delNote = {delNote}/>)}
        {/* we can also pass functions as prop value , here delNote */}
        <Footer />
    </div>
}

export default App;
