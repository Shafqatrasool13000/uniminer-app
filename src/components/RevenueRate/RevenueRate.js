import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import revenue1 from '../../assets/revenue1.png';
import revenue2 from '../../assets/revenue2.png';
import { RevenueRateMain } from './StyledRevenueRate';
const RevenueRate = () => {
    return (
        <RevenueRateMain>

        <Container>
            <Row>
                <Col sm={6}>
                <img  src={revenue1} alt="revenue1" />
                </Col>
                <Col sm={6}>
                <img className='mt-3 mt-sm-0' src={revenue2} alt="revenue2" />

                </Col>
            </Row>
        </Container>
        </RevenueRateMain>
    )
}

export default RevenueRate