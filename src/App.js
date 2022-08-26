import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Seach';

const App = () => {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`);
      console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query])

  const queryFunction = (q) =>{
    setQuery(q)
  }

  return (
    <>
      <Header />
      <Search getQuery={queryFunction} />
      <CharacterGrid items={items} isLoading={isLoading} />
    </>
  )
}

export default App;