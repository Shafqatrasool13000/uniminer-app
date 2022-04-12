import styled from 'styled-components';

export const PaymentCardsMain = styled.div`
margin-top:6.4rem;
.card{
font-family: Manrope;
background: rgba(19, 24, 35, 0.3);
border-radius: 10px;
color: #FFFFFF;
text-align: center;
padding-top: 3.2rem ;
padding-bottom: 1.6rem;
.first-section{
background: rgba(19, 24, 35, 0.5);
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
.price-div{
color: #6C86AC;
font-family: Manrope;
font-size: 1.4rem;
font-weight: 600;
line-height: 1.9rem;
letter-spacing: 0em;
padding-bottom: 3.2rem;
border-bottom: 1px solid rgba(255, 255, 255, 0.205);
.days{
margin-top:1.6rem;
}
.days-details{
margin-top:0.8rem;
}
.price{
margin-top:1.6rem;
font-size: 2.8rem;
font-weight: 600;
line-height: 3.8rem;
letter-spacing: 0em;
color: #FFFFFF;
}
.time{
font-size: 1.4rem;
font-weight: 400;
line-height: 1.9rem;
letter-spacing: 0em;

}
}
.buy-now{
    margin-top:4.6rem;
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
}

}
.second-section{
    margin-top:1.7rem;
    .title{
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.4rem;
    letter-spacing: 0em;
    }
.sub-title{
font-size: 1rem;
font-weight: 400;
line-height: 1.4rem;
letter-spacing: 0em;
}
.powered-by{
    p:not(:first-child){
        margin-left:0.8rem;
    }
    .second{
        background-color:#FE8B1F;
        padding:0.2rem;
    }
}
.compare{
    margin-top:1.7rem;
}
.offer-with-price{
    .price{
        margin-left:1.8rem;
    }
}
}

}
`