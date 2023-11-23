import SearchBar from './components/SearchBar';
import './App.css';
import searchImages from './api';
import ImageList from './components/ImageList'
import { useState } from 'react';

function App() {

  const [images, setImages] = useState([]);

const handleSubmit = async (term) => {
 const result = await searchImages(term);
 setImages(result)
}

  return (
    <div className="App">
      <SearchBar onSubmit = {handleSubmit}/>
      <ImageList images = {images}/>
    </div>
  );
}

export default App;

//onSubmit could be changed to anything cause it's just a prop, e.g., callonKubaSubmit. It just has to be the same as in thr SearchBar.js
//handle submit jest tutaj bo SearchBar nie może przekazywać informacji do API i na odwrót przez co musi się to odbywać w App