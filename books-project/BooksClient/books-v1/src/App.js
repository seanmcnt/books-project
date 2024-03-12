import logo from './logo.svg';
import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Reviews from './components/reviews/Reviews';
import NotFound from './components/notFound/NotFound';

function App() {

  const [books, setBooks] = useState();
  const [book, setBook] = useState();
  const [reviews, setReviews] = useState([]);

  const getBooks = async () => {

    try{
      const response = await api.get("/api/v1/books");

      setBooks(response.data);
      
    } catch (err){
      console.log(err);
    }

  }

  const getBookData = async (bookId) => {

    try{
      const response = await api.get(`/api/v1/books/${bookId}`);
      const singleBook = response.data;

      setBook(singleBook);

      setReviews(singleBook.reviewIds);


    } catch (err){
      console.log(err);
    }

  }


  useEffect(() => {
    getBooks();
  },[])

  return (
    <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home books={books} />}></Route>
            <Route path="/Reviews/:bookId" element={<Reviews getBookData = {getBookData} book={book} reviews={reviews} setReviews ={setReviews}/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
          </Route>
        </Routes>

    </div>
  );
}

export default App;
