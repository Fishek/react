import { useState } from "react";

function SubmitId({newColor}) {

    const [id, setId] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        newColor(id);
        setId('')
    }

    const handleChange = (e) => {
        setId(e.target.value);
    };


    return (
        <div>
        
        <form onSubmit={handleSubmit}>
        <label>Submit the id of color that you want to remove: </label>
        <input type="number" value = {id} onChange={handleChange}/>
        <button onClick={handleSubmit}>submit</button>
        
        </form>
        </div>
    )
}

export default SubmitId;