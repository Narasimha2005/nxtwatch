import styled from 'styled-components'

export const HomePage = styled.div`
    display: flex;
`
export const FailureContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    background-color: ${props =>
      props.theme === 'light' ? '#f1f1f1' : '#181818'};
    padding: 20px;
`
export const FailureImage = styled.img`
    width: 300px;
    margin: 50px 0px;
`
export const FailureParagraph = styled.p`
    font-family: "Roboto";
    font-size: 15px;
    text-align:center;
    color: ${props => (props.theme === 'light' ? '#475569' : '#94a3b8')}
`
export const FailureHeading = styled.h1`
    font-family: "Roboto";
    font-size: 28px;
    margin:0px;
    color: ${props => (props.theme === 'light' ? '#0f0f0f' : '#f1f1f1')}
`
