import styled from 'styled-components';

export const FooterMain=styled.div`
border-top: 1px solid #25C080;
font-family: Manrope;
padding:4.6rem 0;
.footer-list{
 
    .list-item{
        font-size: 1.8rem;
        font-weight: 600;
        line-height: 2.5rem;
        letter-spacing: 0em;
        list-style: none;
        color: #FFFFFF;
    }
    .list-item:not(:first-child){
        margin-left:5rem;
    }
}
.social-imgs{
.social-img:not(:first-child){
margin-left:3.9rem;
}
}
.copyright-section{
margin-top:6.4rem;
.copyright-text{
font-size: 16px;
font-weight: 400;
line-height: 22px;
letter-spacing: 0em;
color: #CAC4D9;
 } 
}
`
