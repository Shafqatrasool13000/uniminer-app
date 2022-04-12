import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import {PlanDetailsMain} from './StyledPlanDetails';
import caution from '../../assets/caution.svg';
import current from '../../assets/current.svg';
const PlanDetails = () => {
    const planDetails=[{
        sub_title:'Plan Mode:',title:'Acceleration',icon_2:caution,icon_1:current,
    },{
        sub_title:'Share Ritio:',title:'50%',icon_2:caution 
    },{
        sub_title:'Estimated starting time:',title:'24 hrs         '
    },{
        sub_title:'Payout Pool:',title:'Third–Party Pool'                  
    },{
        sub_title:'Currency: ',title:'BTC'
    },{
        sub_title:'Amount::',title:'50TH/s',icon_2:caution,icon_1:current,
    },{
        sub_title:'Miner:',title:'Antminer S17'
    },{
        sub_title:'Payout Cycle:',title:'Daily the soonest'
    },{
        sub_title:'Runtime:',title:'Runtime:',icon_2:caution
    },{
        sub_title:'Plan Mode:',title:'Acceleration',icon_2:caution,icon_1:current,
    },]
    const analysisDetails=[{
        sub_title:'Hashrate Fee/T/D:',title:'$0,0967',icon_2:caution
    },{
        sub_title:'Electricity Fee/T/D:',title:'$0,0967',icon_2:caution
    },{
        sub_title:'Static: Output/T/D:',title:'$0,0967',icon_2:caution
    }]
  return (
    <PlanDetailsMain>
        <Container>     
        <div className="plain-details">
            <div className="plain-title">
            <span className="title">Plan Details</span>
            </div>
            <div className="details-section">
                <Row >
                    {
                      planDetails.map((plan,index)=>(
                        <Col key={index} sm={6} md={4} lg={3}>
                        <div className="d-flex inner-section">
                            <p className="sub-title">
                           {plan.sub_title}
                            </p>
                            <p className="title d-flex align-items-center">
                            {plan?.icon_1&&(<span className='me-2'><img src={plan?.icon_1} alt="icon" /></span>)} {plan.title}
                            {plan?.icon_2&&(<span className='ms-2'><img src={plan?.icon_2} alt="icon" /></span> )
                            }
                            </p>
                        </div>
                    </Col>
                      ))  
                    }
                </Row>
            </div>
        </div>
        <div className="static-analysis">
        <div className="analysis-title d-flex align-items-center">
            <span className="title">Static Analysis</span>
            <span className="sub-title ms-2">(For reference only)</span>
            </div>
            <div className="details-section">
                <Row >
                    {
                      analysisDetails.map((plan,index)=>(
                        <Col key={index} sm={6} md={4} lg={3}>
                        <div className="d-flex inner-section">
                            <p className="sub-title">
                           {plan.sub_title}
                            </p>
                            <p className="title d-flex align-items-center">
                            {plan?.icon_1&&(<span className='me-2'><img src={plan?.icon_1} alt="icon" /></span>)} {plan.title}
                            {plan?.icon_2&&(<span className='ms-2'><img src={plan?.icon_2} alt="icon" /></span> )
                            }
                            </p>
                        </div>
                    </Col>
                      ))  
                    }
                </Row>
            </div>
        </div>
        </Container>
    </PlanDetailsMain  >
  )
}

export default PlanDetails