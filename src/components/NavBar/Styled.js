import styled from 'styled-components'

const Container = styled.div`
height: 30px;
padding: 20px;
background-color: #000;

display: flex;
justify-content: space-between;
align-items: center;



nav{

    margin: 0 auto;
    
    ul{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    li{
        padding: 0 20px;
        list-style: none;
        color: white;
        text-decoration: none;
    }

    a{
        color: white;
        text-decoration: none;
    }
}

`


export { Container }