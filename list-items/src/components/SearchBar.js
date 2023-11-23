import { useState } from "react";

function SearchBar({onSubmit}) {

  const [title, setTitle] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(title);
    setTitle('');
  }

  const handleChange = (event) =>
  {
    setTitle(event.target.value)
    
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
    <label>Dodaj książkę: </label>
    <input value = {title} onChange={handleChange}/>
    <button>Dodaj książkę</button>
    </form>
    </div>
  )
}

export default SearchBar;
