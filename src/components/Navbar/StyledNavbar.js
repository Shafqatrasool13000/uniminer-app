import styled from 'styled-components';
import nav_logo from '../../assets/nav-logo.svg';

export const NavbarMainContainer = styled.div`
  font-family: Manrope;
font-style: normal;


.order-btn{
height: 4.5rem;
width: 14.3rem;
background: linear-gradient(90deg, #14C5FB 0%, #095BE9 100%);
border-radius: 4px;
padding: 1rem;
font-family: Manrope;
font-size: 1.8rem;
font-weight: 700;
line-height: 2.5rem;
letter-spacing: 0.01em;
text-align: center;
color: #FFFFFF;
@media screen and (max-width:480px) {
    width: 10.3rem;
    font-size: 1.5rem;
}
}


.navbar-light .navbar-toggler {
    color: #0047AB;
    border-color: #0047AB ;
    outline: none;
}
.navbar-light .navbar-toggler-icon{
    background-image: url(${nav_logo});
}

.navbar-light .navbar-nav .nav-link{
  font-family: Manrope;
font-size: 1.8rem;
font-weight: 500;
line-height: 2.5rem;
letter-spacing: 0em;
text-align: left;
color: #FFFFFF;
   
}
@media (min-width: 992px){
    .navbar-expand-lg .navbar-nav .nav-link:not(:first-child) {
   padding-left: 5rem !important;
   padding-right:0 !important;
}
.navbar-expand-lg .navbar-nav .nav-link:last-child {
   padding-left: 10rem !important;
 
}
  }
.navbar-light .navbar-nav .nav-link{
  margin-left:0;


}

`