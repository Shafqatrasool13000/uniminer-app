import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { PaymentCardsMain } from './StyledPaymentCards';
import hotImg from '../../assets/hot.svg';
import caution from '../../assets/caution.svg';

const PaymentCards = () => {
    const cards=[1,2,3,4];
    return (
        <PaymentCardsMain>
            <Container>
                <Row className='justify-content-center'>
                    {
                        cards.map((title,index)=>(
                            <Col key={index} sm={6} md={4} lg={3}>
                            <Card>
                            <div class="ribbon-corner" data-tor="place.left place.top">Sale!</div>
                                <Card.Body>
                                <div className="first-section">
                                <Card.Title className='d-flex align-items-center justify-content-center'>
                                       Antiminer S17 Plan
                                       <span><img src={hotImg} alt="hot img" /></span>
                                   </Card.Title>
                                   <div className="price-div">
                                       <p className="days">360 Days</p>
                                       <p className="days-details">50 TH/s</p>
                                       <p className="price">$1740.00</p>
                                       <p className="time">Estimated starting in 24 hrs</p>
                                   </div>
                                   <div className="buy-now">
                                       <div className="sold-percentage d-flex justify-content-center">
                                           <div class="progress">
                                               <div class="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                           </div>
                                           <p className='percentage'>sold 29%</p>
                                       </div>
                                       <button className="buy-now-btn">Buy Now</button>
                                   </div> 
                                </div>
                                <div className="second-section">
                                    <div className="powered-by title d-flex justify-content-center">
                                 <p className="first">Provided by </p>
                                 <p className="second">Self–run</p>
                                 <p className="third">Bitdeer</p>
                                    </div>
                                    <p className="compare sub-title">Comparative analysis</p>
                                    <div className="offer-with-price">
                                        {
                                            [1,2,3,4].map(({title,price},index)=>(
                                                <div className="d-flex justify-content-center">
                                                <p className="sub-title">
                                                Hashrate fee 
                                                </p>
                                                <p className="title price d-flex">
                                                    <p>
    
                                                $0,0967/T/D
                                                    </p>
                                                <span> <img className='ms-2  mb-1' src={caution} alt="caution" /></span>
                                                </p>
                                            </div>
                                            ))
                                        }
                                      
                                    </div>
                                </div>                       
                                </Card.Body>
                            </Card>
                        </Col>
                        ))
                    }
                   
                </Row>
            </Container>
        </PaymentCardsMain>
    )
}

export default PaymentCards