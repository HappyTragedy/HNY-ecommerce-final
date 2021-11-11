import styled from 'styled-components'
import Pattern from '../../assets/images/pattern.png'
import Font from '../../assets/fonts/CatCafe.ttf'

const Container = styled.div`
height: 15vh;
padding: 20px;
background-image: url('${Pattern}');
background-repeat: no-repeat;
background-size: cover;
display: grid;
grid-template-columns: 1fr 1fr;
align-items: center;
margin-bottom: 10%;


@font-face {
  font-family: 'CatCafe';
  src: url('${Font}');
}

.patron{
    box-shadow: 0px 0px 20px 2px #000000;
}

img{
    width: 65%;
}

nav{

    position: absolute;
    bottom: 85%;
    left: 60%;

    ul{ 
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        align-items: center;
        row-gap: 33%;
    }

    li{
        padding: 0 20px;
        list-style: none;
        color: white;
        text-decoration: none;
    }

    .four{
        grid-column: 1 / 3;
        grid-row: 2;
    }

    .five{
        grid-column: 2 / 4;
        grid-row: 2;
    }

    a{
        color: black;
        text-decoration: none;
        font-family: "CatCafe";
        font-size: 18px;
    }
}
`


export { Container }