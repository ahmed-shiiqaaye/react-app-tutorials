import styled from "styled-components";

export const Hero = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    overflow: hidden;
    gap: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 20px;

    h1{
        text-transform: capitalize;
        font-size: 37px;
        margin-bottom: 40px;
    }
    p{
        opacity: .7;
        margin-bottom:30px;
    }

    & > div{
        flex: 1;
    }

@media  (max-width:768px) {
    flex-direction:column;
    text-align: center;
    padding-top: 30px;
    h1{
        font-size: 37px;
    }
}
`

export const HeroContainer = styled.div`
width: 100%;
position: relative;
padding-top: 80px;
@media  (max-width:768px) {
    padding-top: 30px;
}
`