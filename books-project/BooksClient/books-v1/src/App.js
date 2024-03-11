import logo from './logo.svg';
import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';

function App() {

  const [books, setBooks] = useState();

  const getBooks = async () => {

    try{
      const response = await api.get("/api/v1/books");

      console.log(response.data);

      setBooks(response.data);
      
    } catch (err){
      console.log(err);
    }

  }

  useEffect(() => {
    getBooks();
  }, [])

  return (
    <div className="App">

    </div>
  );
}

export default App;
