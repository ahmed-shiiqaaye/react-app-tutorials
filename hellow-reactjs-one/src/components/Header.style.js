import styled from "styled-components";


export const NavHeader = styled.header`
height: auto;
width: 100%;
background: ${(props) => props.bg};
color:white;

@media (max-width:768px) {
    button{
        display: none;
    }
}
`

export const Logo = styled.img`
height:60px;
`