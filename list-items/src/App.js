import {useState} from 'react';
import SearchBar from './components/SearchBar';
import ItemsList from './components/ItemsList';
import ItemsRemove from './components/ItemsRemove';

function App() {

  const [tytul, setTytul] = useState([])

  const HandleAppSubmit = (title) => {
   const list = [...tytul, title]
    setTytul(list);
  }

  const handleRemoveItem = (indexToRemove) => {
    const updatedList = tytul.filter((item, index) => index !== indexToRemove);
    setTytul(updatedList);
  };

  return (
    <div className="App">
    
     <SearchBar onSubmit = {HandleAppSubmit}/>
     <h1>List Tytułów: </h1>
     <ItemsList titles={tytul} />
     <ItemsRemove onRemoveItem= {handleRemoveItem}/>
    </div>
  );
}

export default App;
//titles = {tytul}