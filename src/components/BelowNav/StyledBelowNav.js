import styled from 'styled-components';
export const BelowNavMain = styled.div`
margin-top:3.2rem;
background: rgba(0, 0, 0, 0.3);
border-radius: 10px;
.inner-div{
    padding:4.2rem 6.4rem 3.2rem 6.4rem;
    @media screen and (max-width:480px) {
        padding:0;
        padding-top:2rem;
   }
    .nav-tabs{
    border-bottom: 1px solid rgba(255, 255, 255, 0.205);
    
  

}
.nav-tabs{
   @media screen and (max-width:480px) {
       overflow: auto;
   }
}
.nav-tabs .nav-link {
font-family: Manrope;
font-size: 14px;
font-weight: 600;
line-height: 19px;
letter-spacing: 0em;
text-align: left;
color: #FFFFFF;

background:transparent;
}
.active-tab{
    border-bottom: 2px solid #00897C; 
}
.cryto-types{
.right-line{
border: 1px solid #E9E9E9;;
transform: rotate(90deg);
width: 10px;
height: 0px;
}
}

.second-tabs{
margin:3.2rem 0;
font-family: Manrope;
font-size: 14px;
font-weight: 600;
line-height: 19px;
letter-spacing: 0em;
border-bottom:1px solid rgba(233, 233, 233, 0.205);
padding-bottom:3.2rem;

cursor:pointer;
color: #FFFFFF;
.second-tab{
margin-left:3.2rem;
border-bottom: 2px solid #00897C;
padding-bottom: 0.5rem;}
.third-tab:not(:first-child){
margin-left:3.2rem;
}
}
}

`