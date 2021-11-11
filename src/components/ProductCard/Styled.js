import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

padding: 20px;
border-radius: 30px;
border: 1px solid black;

.contenedor{
    background-color: black;
}

img{
    width: 100%;
    border-radius: 30px;
}
`

const Aviso = styled.div`

background-color: rgb(255,255,255, 0.9);
width: 20%;
padding: 2%;
margin-left: 5%;
color: black;
font-family: 'CatCafe';
position: absolute;
top: 25%;
left: 35%;

`

export { Container, Aviso }