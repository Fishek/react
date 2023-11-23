import { useState } from "react";

//in this map bird: bird, cat: cat... would be the same

export default function AnimalShow({onSubmit}) {

  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSecondSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    onSubmit(value);
    setValue("");
  }

  return (
    <div>
    <form onSubmit = {handleSecondSubmit}>
      <label>Enter text</label> <hr />
      <input value={value} onChange={handleChange} />
      
      </form>
      <p>{value}</p>
    </div>
  );
}
