import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

    const [isExpanded, setExpanded] = useState(false);

    const [inputText, setInputText] = useState({
        title: "",
        content: ""
    });
    
    function handleChange(event) {
        const { name, value } = event.target;
        setInputText((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }

    return (
        <div>
            <form className="create-note">
                {isExpanded && <input onChange={handleChange} name="title" placeholder="Title" value={inputText.title} autoComplete="off" />}
                <textarea onClick={() => {
                    setExpanded(true);
                }} onChange={handleChange} name="content" placeholder="Take a note..." rows={isExpanded ? "3" : 1} value={inputText.content}/>
                <Zoom in={isExpanded}>
                    <Fab onClick={(event) => {
                        event.preventDefault();
                        props.addNote(inputText);
                        setInputText({
                            title: "",
                            content: ""
                        });
                    }}><AddIcon /></Fab>
                </Zoom>
                
            </form>
        </div>
    );
}

export default CreateArea;