import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { AntiminerMain } from './StyledAntiminer';
import hotImg from '../../assets/hot.svg';
import antiminer from '../../assets/antiminerImg.png';


const Antiminer = () => {

    return (
        <AntiminerMain>
            <Container>
                <Row className='justify-content-center'>
                    <Col sm={6} lg={4}>
                        <Card>
                            <Card.Body>
                                <div className="first-section">
                                    <Card.Title className='d-flex align-items-center justify-content-center'>
                                        Antiminer S17 Plan
                                        <span><img src={hotImg} alt="hot img" /></span>
                                    </Card.Title>
                                        <p className="miner-info">Miner info</p>
                                        <img src={antiminer} alt="antiminer" className="antiminer" />                              
                                </div>
                                <div className="second-section">
                                    <p className="optimize">Global optimization is promising</p>
                                    <div className="details-section">
                                        {
                                            [1, 2, 3].map((title, index) => (
                                                <div className="d-flex detail-section justify-content-center">
                                                    <p>Hashrate</p>
                                                    <p className='ms-4'>53TH/s</p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm={6} lg={8}>
                        <div className="right-section">
                            <p className="title">Antiminer S17/360Days/50T/BTC–Acceleration Computing Power Plan</p>
                            <div className="conversion-section d-flex align-items-center">
                                <div className="conversion-1 d-flex align-items-center">
                                <p className="fee">Hashrate Fee </p>
                                <p className="price ms-3">$1740</p>
                                </div>
                                <div className="conversion-2 d-flex align-items-center">
                                <p className="fee">Hashrate Fee </p>
                                <p className="price ms-3">$1740</p>
                                </div>
                            </div>
                            <div className="currency-rate">
                                <div className="d-flex">
                                    <p className="sub-title">
                                    Currency
                                    </p>
                                    <div className="currencies-1  d-flex">
                                        <p className="sub-title">BTC</p>
                                        <p className="sub-title ms-3 border-below">BCH</p>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <p className="sub-title">
                                    Amount
                                    </p>
                                    <div className="currencies-1">
                                    <p className="sub-title border-below">50TH/s</p>
                                    </div>
                                </div>
                            </div>
                            <div className="buy-now-section">

                            <button className="buy-now-btn ">
                            Buy Now
                            </button>
                            <p className="service mini-title">Hasharate and after–sales services provided by <span className='self-run'>Self–run</span> <span className='bit-deer'>Bitdeer</span> <span>,  Estimated starting in 24 hrs</span> </p>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </AntiminerMain>
    )
}

export default Antiminer