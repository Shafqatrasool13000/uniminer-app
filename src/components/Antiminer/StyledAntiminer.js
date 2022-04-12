import styled from 'styled-components';

export const AntiminerMain = styled.div`
margin-top:6.4rem;
.card{
font-family: Manrope;
background: rgba(19, 24, 35, 0.3);
border-radius: 10px;
color: #FFFFFF;
text-align: center;
padding-top: 3.2rem ;
padding-bottom: 1.6rem;
background: rgba(19, 24, 35, 0.5);
.first-section{

border-radius: 10px;
.card-title{
font-size: 14px;
font-weight: 600;
line-height: 19px;
letter-spacing: 0em;
text-align: left;
padding-bottom:1.6rem;
border-bottom: 1px solid rgba(255, 255, 255, 0.205);
}

.miner-info{
color: #6C86AC;
font-family: Manrope;
font-size: 1.4rem;
font-weight: 600;
line-height: 1.9rem;
letter-spacing: 0em;
padding-bottom: 3.2rem;

}

}
.second-section{
margin-top:1.6rem;
background: rgba(19, 24, 35, 0.2);
.optimize{
font-size: 1.4rem;
font-weight: 400;
line-height: 1.9rem;
letter-spacing: 0em;
color: #6C86AC;
}
.details-section{
.detail-section{
font-size: 1rem;
font-weight: 400;
line-height: 1.4rem;
letter-spacing: 0em;
margin-top:0.8rem;
}
}
}
}
.right-section{
font-family: Manrope;
color: #FFFFFF;

.title{ 
font-size: 1.8rem;
font-weight: 600;
line-height: 2.5rem;
letter-spacing: 0em;
}

.price{
font-size: 2.8rem;
font-weight: 600;
line-height: 3.8rem;
letter-spacing: 0em;
}

.sub-title{
font-size: 1.4rem;
font-weight: 600;
line-height: 1.9rem;
letter-spacing: 0em;
}

.mini-title{
font-size: 1rem;
font-weight: 600;
line-height: 1.4rem;
letter-spacing: 0em;

}
.conversion-section{
background: rgba(0, 0, 0, 0.3);
border-radius: 10px;
padding:1.6rem;
.conversion-2{
margin-left:6.4rem;
 }
}
.currency-rate{
margin-top:3.2rem;
.border-below{
border-bottom: 2px solid #00897C;
}
.currencies-1{
margin-left:6.4rem;
}
}
.buy-now-section{
    margin-top:3.2rem;
    margin-left:12rem;
    @media screen and (max-width:480px) {
    margin-left:2rem;
        
    }
    .buy-now-btn{
        height: 4.5rem;
        width: 24.6rem;
      
    background: linear-gradient(90deg, #14C5FB 0%, #095BE9 100%);
    border-radius: 4px;
    
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 2.5rem;
    letter-spacing: 0.01em;
    text-align: center;
    color: #FFFFFF;
    @media screen and (max-width:1200px) {
    width: 20rem;
        
    }
        }
        .service{
            margin-top:1.6rem;
            .self-run{
                background: #FE8B1F;
border-radius: 2px;
padding:0.3rem;
            }
            .bit-deer{
                color: #FE8B1F;
            }
        }
}

}
`