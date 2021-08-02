import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { v4 as uuidv4 } from 'uuid';

function App() {

    const [notes, setNotes] = useState([]);

    function addNote(inputText) {
        setNotes((prevValue) => {
            return [
                ...prevValue,
                {
                    ...inputText,
                    key: uuidv4()
                }
            ];
        });
    }

    function deleteNote(index) {
        setNotes((prevValue) => {
            return prevValue.filter((note, i) => {
                return i !== index;
            });
        });
    }

    return (
        <div>
            <Header />
            <CreateArea addNote={addNote} />
            {notes.map((note, index) => {
                return <Note key={note.key} index={index} title={note.title} content={note.content} deleteNote={deleteNote} />;
            })}
            <Footer />
        </div>
    );
}

export default App;