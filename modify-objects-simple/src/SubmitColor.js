import { useState } from "react";

function SubmitColor({newColor}) {

    const [color, setColor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        newColor(color);
    }

    const handleChange = (e) => {
        setColor(e.target.value);
    };


    return (
        <div>
        
        <form onSubmit={handleSubmit}>
        <label>Submit the new color: </label>
        <input type="text" value = {color} onChange={handleChange}/>
        <button onClick={handleSubmit}>submit</button>
        
        </form>
        </div>
    )
}

export default SubmitColor;