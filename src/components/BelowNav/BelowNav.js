import { Tab } from 'bootstrap';
import React, { useState } from 'react'
import { Container, Tabs } from 'react-bootstrap';
import { BelowNavMain } from './StyledBelowNav';
import btc from '../../assets/btc.svg';
import ckb from '../../assets/ckb.svg';
import fil from '../../assets/fil.svg';
import hns from '../../assets/hns.svg';
import zek from '../../assets/zek.svg';
export const BelowNav = () => {
    const [key, setKey] = useState('btc');

    const crytoList = [
        { title: 'BTC/BCH', img: btc },
        { title: 'FIL', img: fil },
        { title: 'ZEK', img: zek },
        { title: 'CKB', img: ckb },
        { title: 'HNS', img: hns },
    ];
    const planMode = ['Plan Mode:', 'All', 'Classic', 'Acceleration'];

    return (
        <Container>
            <BelowNavMain>
                <div className="inner-div">
                    <ul class="nav nav-tabs">
                        <div className="cryto-types d-flex">
                        {
                            crytoList.map(({ title, img }, index) => (
                                <li key={index} class={`nav-item d-flex align-items-center ${index === 0 ? 'active-tab' : ''}`}>
                                    <a class="nav-link " href="#">
                                        <span className='me-3'>
                                            <img className='cryto-img' src={img} alt="btc" />
                                        </span>
                                        {title}
                                    </a>
                                    <span className='right-line'></span>
                                </li>
                            ))
                        }
                        </div>

                    </ul>
                    <div className="second-tabs d-flex">
                        <p className="first-tab">
                            Merchants
                        </p>
                        <p className="second-tab">
                            Bitdeer Self-run
                        </p>
                    </div>
                
                    <div className="second-tabs d-flex">
                        {
                          planMode.map((title,index)=>(
                            <p key={index} className={`third-tab ${index===1?'active-tab':''}`}>
                            {title}
                        </p>
                          ))  
                        }  
                    </div>
                    <div className="second-tabs d-flex">
                        <div className="d-flex">
                            <p>View more</p>
                            <p className='ms-3 fs-3'>&#8595;</p>
                            </div>  
                    </div>
                    
                </div>



            </BelowNavMain>
        </Container>
    );
}

