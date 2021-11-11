import styled from "styled-components";
import Pattern from '../../assets/images/paper.jpg'

const H2 = styled.h2`

font-family: 'CatCafe';
text-align: center;
margin-bottom: 10%;
font-size: 32px;

`

const Container = styled.div`

width: 60%;
margin: 0 auto;

`

const Formulario = styled.form`

display: grid;
row-gap: 23%;
align-content: center;

`

const Field = styled.input`

width: 100%;
border: 0;
border-bottom: 2px solid lightgrey;
outline: 0;
font-size: 12px;
color: black;
padding: 7px 0;
background: transparent;

&::placeholder {
color: grey;
}

`

const Button = styled.button`

width: 33%;
margin: 0 auto;
font-family: 'CatCafe';
font-size: 15px;
text-align: center;
background-image: url('${Pattern}');
padding: 4% 10%;
border: none;
border-radius: 8%;
cursor: pointer;
transition: 0.3s;

&:hover{
    filter: brightness(105%);
}

`

export { Container, Button, Formulario, Field, H2 }