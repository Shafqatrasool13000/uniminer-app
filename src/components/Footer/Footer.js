import React from 'react'
import { Col, Container,  Row } from 'react-bootstrap'
import { FooterMain } from './StyledFooter';
import logo from '../../assets/logo.svg';
import facebook from '../../assets/facebook.svg';
import linkedin from '../../assets/linkedin.svg';
import twitter from '../../assets/twitter.svg';
import youtube from '../../assets/youtube.svg';

const Footer = () => {
    const socialImgs = [facebook, linkedin, twitter, youtube];
    const listItems= ['Miners','Hosting','Cloud mining','Blog','Token'];
    return (
        <FooterMain>
            <Container>
                <Row >
                    <Col md={3} lg={2}>
                        <div className="img-div">
                            <img src={logo} alt="logo" />
                        </div>
                    </Col>
                    <Col lg={7} md={9}>
                        <ul
                            className="footer-list mt-3 mt-md-0 p-0 d-flex flex-wrap justify-content-center justify-content-md-between"
                        >
                            {
                               listItems.map((title,index)=>(
                                    <li key={index} className='list-item mt-3 mt-md-0'>{title}</li>
                                ))
                            }
                        </ul>
                    </Col>
                    <Col md={6} lg={3}>
                        <div className="social-imgs d-flex mt-2 mt-sm-0 align-items-center justify-md-content-end flex-wrap">
                            {
                                socialImgs.map((img, index) => (
                                    <img key={index} src={img} alt="" className="social-img" />
                                ))
                            }
                        </div>
                    </Col>
                </Row>
                <div className="copyright-section d-flex justify-content-between flex-wrap">
                    <p className="copyright copyright-text">© 2021 Copyright 2021 by Uniminer</p>
                    <p className="reserved copyright-text">All Right Reserved</p>
                </div>
            </Container>
        </FooterMain>
    )
}

export default Footer