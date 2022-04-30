import styled from "styled-components";

export const Button = styled.button`
    padding:10px 30px;
    background-color: ${(props)=>props.bg};
    color: ${(props) => props.color};
    border: 0;
    border: 1px solid black;
    text-transform: capitalize;
    border-radius: 24px;
    transition: all .3s ease-in-out;
    &:hover{
        background: #000;
    }

`