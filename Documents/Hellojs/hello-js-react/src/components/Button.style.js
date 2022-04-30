import styled from "styled-components";

export const StyledButton = styled.button`
padding: 10px 24px;
font-size: 14px;
border-radius: 4px;
border: 1px solid rgba(0,0,0,.4);
background: ${(props) => props.bg};
color:${(props) => props.color};
text-transform: capitalize;
transition: all .3s ease-in-out;
cursor: pointer;

&:hover{
    background: darkblue;
}
`