import styled from "styled-components";
import featureBurger from "../../data/images/feature/featureBurger.jpg"

export const FeatureProductContainer = styled.div`
background:linear-gradient(to right,  rgba(0,0,0,0.7) ,rgba(0,0,0,0.1)), url(${featureBurger});
height:100vh;
width:100vw;
max-height:500px;
background-position:center;
background-size:cover;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
color:#fff;
text-align:center;
padding:0 1rem;

h1{
    font-size: clamp(3rem,5vw,5rem);   
}
p{
    margin-bottom:1rem;
    font-size:clamp(1rem,3vw,2rem);
}


`;
export const FeatureButton = styled.button`
fonst-size: 1rem;
padding: 0.6rem 3rem;
border: none;
background: #ffc500;
color: #000;
transition: 0.2s ease-out;

&:hover {
  background: #e31837;
  transition: 0.2s ease-out;
  cursor: pointer;
  color: #fff;
}
`;
