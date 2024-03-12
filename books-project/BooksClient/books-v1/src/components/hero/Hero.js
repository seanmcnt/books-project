import React from 'react'
import './Hero.css';
import Carousel  from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const Hero = ({books}) => {

    const navigate = useNavigate();

    function reviews(bookId){
        navigate(`/Reviews/${bookId}`);
    }

  return (
    <div className='book-carousel-container'>
        <Carousel>
            {
                books?.map((book) =>{
                    return(
                        <Paper key={book.id}>
                            <div className='book-card-container'>
                                <div className='book-card' style={{"--img": `url(${book.cover})`}}>
                                    <div className='book-detail'>
                                        <div className='book-cover'>
                                            <img src={book.cover} alt=""/>
                                        </div>
                                        <div className='book-title'>
                                            <div><h4>{book.title}</h4></div>
                                            <div><h4>{book.author}</h4></div>
                                        </div>
                                        <div className='book-plot-container'>
                                            <div className='book-plot-button-container'>
                                                <a href={book.plotLink} target="_blank" rel="noopener noreferrer">
                                                <FontAwesomeIcon className='book-button-icon' icon= {faBook} title="Good Reads Plot Summary"/>
                                                </a>
                                            </div>
                                            <div className='book-review-button-container'>
                                                <Button variant="info" onClick={() => reviews(book.isbn)}>Reviews</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Paper>
                    )
                })
            }
        </Carousel>
    </div>
  )
}

export default Hero