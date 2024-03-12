import {useEffect, useRef} from 'react';
import api from '../../api/axiosConfig';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import ReviewForm from '../reviewForm/ReviewForm';
import React from 'react';
import './Reviews.css'; 

const Reviews = ({getBookData,book,reviews,setReviews}) => {

    const revText = useRef();
    let params = useParams();
    const bookId = params.bookId;

    useEffect(() => {
        getBookData(bookId);
    },[])

    const addReview = async (e) =>{
        e.preventDefault();

        const rev = revText.current;

        try{
            const response = await api.post("/api/v1/reviews",{reviewBody:rev.value,isbn:bookId});

            const updatedReviews = [...reviews,{body:rev.value}];
    
            rev.value = "";
    
            setReviews(updatedReviews);
    
        } catch (err){
            console.log(err);
        }

    }

  return (
    <Container>
        <Row>
            <Col><h3>Reviews</h3></Col>
        </Row>
        <Row className="mt-2">
            <Col>
                <img src={book?.cover} className="book-cover" alt=""/>
            </Col>
            <Col>
                {
                    <>
                        <Row>
                            <Col>
                                <ReviewForm handleSubmit={addReview} revText={revText} labelText= "Share your Review!"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <hr />
                            </Col>
                        </Row>
                    </>
                }
                {
                    reviews?.map((r) => {
                        return(
                            <>
                                <Row>
                                    <Col>{r.body}</Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <hr />
                                    </Col>
                                </Row>     
                            </>

                        )
                    })
                }
            </Col>
        </Row>
        <Row>
            <Col>
                <hr/>
            </Col>
        </Row>
    </Container>
  )
}

export default Reviews